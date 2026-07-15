// Hub Page — Lesson Listing and Lesson Viewer
const HubPage = {
  currentHub: 'cyber',
  currentLesson: null,

  renderHub(hub) {
    this.currentHub = hub;
    this.currentLesson = null;
    const lessons = window.LESSONS_DATA[hub] || [];
    const hubInfo = {
      cyber: { icon: '🔒', title: 'Cyber Crime Awareness Hub', subtitle: 'Scenario-based lessons on the most common digital frauds in India' },
      financial: { icon: '💰', title: 'Financial Literacy Hub', subtitle: 'Practical modules to protect and grow your money safely' },
      digital: { icon: '📱', title: 'Digital Literacy Hub', subtitle: 'Foundational skills to stay safe in the digital world' }
    };
    const info = hubInfo[hub] || hubInfo.cyber;

    return `
      <div class="hub-page">
        <div class="hub-header">
          <span class="hub-icon">${info.icon}</span>
          <div>
            <h1 class="hub-title">${info.title}</h1>
            <p class="hub-subtitle">${info.subtitle}</p>
          </div>
        </div>
        <div class="lessons-grid">
          ${lessons.map((lesson, i) => this.lessonCard(lesson, i)).join('')}
        </div>
      </div>
    `;
  },

  lessonCard(lesson, delay) {
    const done = Helpers.isLessonComplete(lesson.id);
    const quizResult = Helpers.getQuizResult(lesson.id);
    return `
      <div class="lesson-card ${done ? 'completed' : ''}" 
           style="animation-delay:${delay * 0.06}s"
           onclick="HubPage.openLesson('${lesson.id}')">
        <div class="lesson-card-header">
          <span class="lesson-card-icon">${lesson.icon}</span>
          <div class="lesson-card-meta">
            <div class="lesson-card-title">${lesson.title}</div>
            <div class="lesson-card-duration">⏱ ${lesson.duration}</div>
          </div>
          ${done ? '<span class="lesson-card-badge">✅ Done</span>' : ''}
        </div>
        <p class="lesson-card-intro">${lesson.intro}</p>
        <div class="lesson-card-footer">
          <span class="lesson-points">+${lesson.points} pts on completion</span>
          <div style="display:flex; gap:8px; align-items:center;">
            ${quizResult ? `<span style="font-size:0.68rem; color:${quizResult.passed ? 'var(--emerald-light)' : 'var(--crimson-light)'};">${quizResult.passed ? '✅ Quiz Passed' : '❌ Quiz Failed'}</span>` : ''}
            <span style="font-size:0.72rem; color:var(--blue-pale);">Start →</span>
          </div>
        </div>
      </div>
    `;
  },

  openLesson(lessonId) {
    const allLessons = [
      ...(window.LESSONS_DATA.cyber || []),
      ...(window.LESSONS_DATA.financial || []),
      ...(window.LESSONS_DATA.digital || [])
    ];
    const lesson = allLessons.find(l => l.id === lessonId);
    if (!lesson) return;
    this.currentLesson = lesson;
    document.getElementById('page-content').innerHTML = this.renderLesson(lesson);
    Helpers.scrollTop();
  },

  renderLesson(lesson) {
    const done = Helpers.isLessonComplete(lesson.id);
    const hasQuiz = !!(window.QUIZ_DATA && window.QUIZ_DATA[lesson.id]);
    const quizResult = Helpers.getQuizResult(lesson.id);

    return `
      <div class="lesson-viewer">
        <div class="lesson-viewer-header">
          <button class="back-btn" onclick="App.navigate(HubPage.currentHub)">← Back to Lessons</button>
          <div style="flex:1;">
            <h2 style="font-family:var(--font-heading); font-size:1.3rem; font-weight:800;">${lesson.icon} ${lesson.title}</h2>
            <p style="font-size:0.8rem; color:var(--text-muted);">⏱ ${lesson.duration} &nbsp;•&nbsp; +${lesson.points} points</p>
          </div>
          ${done ? '<span style="color:var(--emerald-light); font-size:1.5rem;">✅</span>' : ''}
        </div>

        <!-- Intro -->
        <div class="lesson-section" style="background:rgba(37,99,235,0.08); border-color:rgba(37,99,235,0.2);">
          <p style="font-size:0.95rem; line-height:1.7; color:var(--text-primary);">${lesson.intro}</p>
        </div>

        <!-- Sections -->
        ${lesson.sections.map(s => `
          <div class="lesson-section">
            <h3 class="lesson-section-heading">${s.heading}</h3>
            <ul>
              ${s.content.map(item => `<li>${item}</li>`).join('')}
            </ul>
          </div>
        `).join('')}

        <!-- Complete Bar -->
        <div class="lesson-complete-bar">
          ${done ? `
            <div style="font-size:2rem; margin-bottom:8px;">✅</div>
            <h3>Lesson Completed!</h3>
            <p style="color:var(--text-muted); font-size:0.82rem; margin-bottom:16px;">You've finished this lesson. ${hasQuiz ? "Test your knowledge with the quiz!" : ""}</p>
            ${hasQuiz ? this.quizButton(lesson.id, quizResult) : ''}
          ` : `
            <div style="font-size:2rem; margin-bottom:8px;">📖</div>
            <h3>Ready to complete this lesson?</h3>
            <p style="color:var(--text-muted); font-size:0.82rem; margin-bottom:16px;">Mark as complete to earn ${lesson.points} points and unlock the quiz.</p>
            <button class="btn btn-primary btn-lg" onclick="HubPage.completeLesson('${lesson.id}')">
              ✅ Mark as Complete (+${lesson.points} pts)
            </button>
          `}
        </div>
      </div>
    `;
  },

  quizButton(lessonId, quizResult) {
    if (!window.QUIZ_DATA || !window.QUIZ_DATA[lessonId]) return '';
    if (quizResult && quizResult.passed) {
      return `<div style="color:var(--emerald-light); font-weight:600; margin-bottom:8px;">🏆 Quiz Passed — Score: ${quizResult.score}%</div>
              <button class="btn btn-secondary btn-sm" onclick="QuizPage.start('${lessonId}')">Retake Quiz</button>`;
    }
    return `<button class="btn btn-warning btn-lg" onclick="QuizPage.start('${lessonId}')">
              🧠 Take Quiz (+20 pts if you pass)
            </button>`;
  },

  completeLesson(lessonId) {
    Helpers.markLessonComplete(lessonId);
    const user = Helpers.getUser();
    if (user && user.category !== 'student') {
      Helpers.toast('✅ Lesson complete! +10 points earned!', 'success');
    } else {
      Helpers.toast('✅ Lesson marked as complete!', 'success');
    }
    // Re-render the lesson
    const allLessons = [
      ...(window.LESSONS_DATA.cyber || []),
      ...(window.LESSONS_DATA.financial || []),
      ...(window.LESSONS_DATA.digital || [])
    ];
    const lesson = allLessons.find(l => l.id === lessonId);
    if (lesson) {
      document.getElementById('page-content').innerHTML = this.renderLesson(lesson);
    }
  },

  init() {}
};

window.HubPage = HubPage;
