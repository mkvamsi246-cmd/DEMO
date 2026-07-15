// Quiz Page Module
const QuizPage = {
  currentQuizId: null,
  questions: [],
  currentQ: 0,
  answers: [],
  finished: false,

  start(quizId) {
    const qData = window.QUIZ_DATA[quizId];
    if (!qData) { Helpers.toast('Quiz not available for this lesson yet.', 'info'); return; }
    this.currentQuizId = quizId;
    this.questions = qData.questions;
    this.currentQ = 0;
    this.answers = [];
    this.finished = false;
    document.getElementById('page-content').innerHTML = this.renderQuestion();
    Helpers.scrollTop();
  },

  renderQuestion() {
    const qData = window.QUIZ_DATA[this.currentQuizId];
    const q = this.questions[this.currentQ];
    const progress = Math.round(((this.currentQ) / this.questions.length) * 100);

    return `
      <div class="quiz-page">
        <button class="back-btn" onclick="App.navigate(HubPage.currentHub)" style="margin-bottom:16px;">← Back to Lessons</button>
        <div class="quiz-header">
          <div style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; margin-bottom:8px;">${qData.title}</div>
          <div class="quiz-progress-text">Question ${this.currentQ + 1} of ${this.questions.length}</div>
          <div class="progress-bar">
            <div class="progress-fill" style="width:${progress}%"></div>
          </div>
        </div>

        <div class="quiz-question-card">
          <div class="quiz-question-num">Question ${this.currentQ + 1}</div>
          <div class="quiz-question-text">${q.q}</div>
          <div class="quiz-options" id="quiz-options">
            ${q.options.map((opt, i) => `
              <button class="quiz-option" id="qopt-${i}" onclick="QuizPage.selectAnswer(${i})">
                <span style="font-weight:700; margin-right:8px; color:var(--text-muted);">${String.fromCharCode(65+i)}.</span>${opt}
              </button>
            `).join('')}
          </div>
          <div id="quiz-explanation" class="hidden"></div>
        </div>

        <div id="quiz-next-btn" class="hidden" style="text-align:center; margin-top:8px;">
          <button class="btn btn-primary btn-lg" onclick="QuizPage.nextQuestion()">
            ${this.currentQ < this.questions.length - 1 ? 'Next Question →' : 'See Results 🏆'}
          </button>
        </div>
      </div>
    `;
  },

  selectAnswer(chosen) {
    const q = this.questions[this.currentQ];
    this.answers.push({ chosen, correct: q.correct });

    // Disable all buttons
    const opts = document.querySelectorAll('.quiz-option');
    opts.forEach(o => o.disabled = true);

    // Highlight correct/wrong
    opts[q.correct].classList.add('correct');
    if (chosen !== q.correct) {
      opts[chosen].classList.add('wrong');
    }

    // Show explanation
    const expDiv = document.getElementById('quiz-explanation');
    if (expDiv) {
      expDiv.innerHTML = `<strong>${chosen === q.correct ? '✅ Correct!' : '❌ Incorrect.'}</strong> ${q.explanation}`;
      expDiv.classList.remove('hidden');
    }

    document.getElementById('quiz-next-btn')?.classList.remove('hidden');
  },

  nextQuestion() {
    this.currentQ++;
    if (this.currentQ < this.questions.length) {
      document.getElementById('page-content').innerHTML = this.renderQuestion();
    } else {
      this.showResults();
    }
    Helpers.scrollTop();
  },

  showResults() {
    const correct = this.answers.filter(a => a.chosen === a.correct).length;
    const total = this.questions.length;
    const score = Math.round((correct / total) * 100);
    const passed = score >= 60;

    Helpers.markQuizPassed(this.currentQuizId, score);

    const user = Helpers.getUser();
    const pointsMsg = (user && user.category !== 'student' && passed) ? '<p style="color:var(--saffron); font-size:0.9rem; margin-top:4px;">+20 Points Earned! 🏆</p>' : '';

    document.getElementById('page-content').innerHTML = `
      <div class="quiz-page">
        <div class="quiz-result-card">
          <div style="font-size:3rem; margin-bottom:12px;">${passed ? '🏆' : '📚'}</div>
          <div class="quiz-result-score ${passed ? 'pass' : 'fail'}">${score}%</div>
          <h2 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:700; margin-bottom:8px;">
            ${passed ? 'Excellent! You Passed! 🎉' : 'Keep Practicing! 💪'}
          </h2>
          ${pointsMsg}
          <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:20px;">
            You got <strong style="color:var(--text-primary);">${correct} out of ${total}</strong> questions correct.<br/>
            ${passed ? 'You have demonstrated strong understanding of this topic.' : 'Score 60% or above to pass. Review the lesson and try again.'}
          </p>

          <!-- Answer Review -->
          <div style="text-align:left; margin-bottom:20px;">
            <h3 style="font-family:var(--font-heading); font-size:0.9rem; font-weight:700; margin-bottom:12px; color:var(--text-muted);">ANSWER REVIEW</h3>
            ${this.answers.map((a, i) => {
              const q = this.questions[i];
              return `
                <div style="display:flex; align-items:flex-start; gap:10px; padding:10px 0; border-bottom:1px solid var(--glass-border);">
                  <span style="font-size:0.9rem; flex-shrink:0;">${a.chosen === a.correct ? '✅' : '❌'}</span>
                  <div style="flex:1;">
                    <p style="font-size:0.82rem; color:var(--text-primary); margin-bottom:4px;">${q.q}</p>
                    ${a.chosen !== a.correct ? `
                      <p style="font-size:0.75rem; color:var(--crimson-light);">Your answer: ${q.options[a.chosen]}</p>
                      <p style="font-size:0.75rem; color:var(--emerald-light);">Correct: ${q.options[a.correct]}</p>
                    ` : `<p style="font-size:0.75rem; color:var(--emerald-light);">${q.options[a.correct]}</p>`}
                  </div>
                </div>
              `;
            }).join('')}
          </div>

          <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-primary" onclick="App.navigate(HubPage.currentHub)">← Back to Lessons</button>
            <button class="btn btn-secondary" onclick="QuizPage.start('${this.currentQuizId}')">🔄 Retake Quiz</button>
            <button class="btn btn-secondary" onclick="App.navigate('dashboard')">🏠 Dashboard</button>
          </div>
        </div>
      </div>
    `;
    Helpers.scrollTop();
  },

  init() {}
};

window.QuizPage = QuizPage;
