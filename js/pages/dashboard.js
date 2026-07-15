// Dashboard Page Module
const DashboardPage = {
  render() {
    const user = Helpers.getUser();
    if (!user) return '<p>Not logged in.</p>';
    const isStudent = user.category === 'student';
    const pct = Helpers.getCompletionPercent();
    const completed = (Helpers.getProgress().completedLessons || []).length;
    const total = Helpers.getTotalLessons();
    const points = Helpers.getPoints();
    const certEligible = Helpers.isCertificateEligible();
    const greeting = this.getGreeting();

    return `
      <div class="dashboard-page">
        <!-- Hero Banner -->
        <div class="dashboard-hero">
          <div class="hero-content">
            <p class="hero-greeting">${greeting}</p>
            <h1 class="hero-name">Welcome, <span>${user.name}</span> 👋</h1>
            <div class="hero-meta">
              <span class="hero-meta-item">🎭 ${user.category === 'student' ? 'Student' : 'Citizen'}</span>
              <span class="hero-meta-item">📍 ${user.districtName}</span>
              ${user.college ? `<span class="hero-meta-item">🎓 ${user.college.split(',')[0]}</span>` : ''}
              ${user.place ? `<span class="hero-meta-item">🏢 ${user.place.split(',')[0]}</span>` : ''}
            </div>
            <div style="margin-top:12px;">
              <div style="font-size:0.72rem; color:var(--text-muted); margin-bottom:4px;">Overall Progress — ${pct}% (${completed}/${total} Lessons)</div>
              <div class="progress-bar" style="width:240px;">
                <div class="progress-fill" style="width:${pct}%"></div>
              </div>
            </div>
          </div>
          <div class="hero-stats">
            <div class="hero-stat">
              <div class="hero-stat-value">${completed}</div>
              <div class="hero-stat-label">Lessons Done</div>
            </div>
            ${isStudent ? `
              <div class="hero-stat">
                <div class="hero-stat-value">${certEligible ? '✅' : '🔒'}</div>
                <div class="hero-stat-label">Certificate</div>
              </div>
            ` : `
              <div class="hero-stat">
                <div class="hero-stat-value">${points}</div>
                <div class="hero-stat-label">Points</div>
              </div>
            `}
            <div class="hero-stat">
              <div class="hero-stat-value">${pct}%</div>
              <div class="hero-stat-label">Complete</div>
            </div>
          </div>
        </div>

        ${isStudent && certEligible ? `
          <div class="alert alert-success" style="margin-bottom:20px;">
            🎉 <strong>Congratulations!</strong> You've earned your certificate! Go to <a href="#certificate" style="color:var(--emerald-light);text-decoration:underline;">Certificate</a> to download it.
          </div>
        ` : ''}

        ${!isStudent && points >= 100 ? `
          <div class="alert alert-info" style="margin-bottom:20px;">
            🏆 You've earned <strong>${points} points!</strong> Check your <a href="#rewards" style="color:var(--blue-pale);text-decoration:underline;">rewards and badges</a>.
          </div>
        ` : ''}

        <!-- Main Modules -->
        <h2 class="section-title">📚 Learning Hubs</h2>
        <div class="modules-grid">
          ${this.moduleCard('🔒', 'Cyber Crime Hub', 'Learn to recognize and avoid UPI fraud, OTP scams, phishing, digital arrest, and 10+ more threats.', '#cyber', window.LESSONS_DATA.cyber.length + ' modules', 'rgba(37,99,235,0.08)')}
          ${this.moduleCard('💰', 'Financial Literacy', 'Bank safety, UPI protection, loan awareness, budgeting, savings, insurance, and investment safety.', '#financial', window.LESSONS_DATA.financial.length + ' modules', 'rgba(16,185,129,0.08)')}
          ${this.moduleCard('📱', 'Digital Literacy', 'Smartphone safety, passwords, 2FA, safe browsing, privacy settings, and social media security.', '#digital', window.LESSONS_DATA.digital.length + ' modules', 'rgba(139,92,246,0.08)')}
        </div>

        <h2 class="section-title">🛠️ Interactive Tools</h2>
        <div class="modules-grid">
          ${this.moduleCard('🔍', 'Scam Message Checker', 'Paste any suspicious SMS, WhatsApp, email, or link and get instant risk assessment.', '#scam-checker', 'Instant Analysis', 'rgba(245,158,11,0.08)')}
          ${this.moduleCard('🎮', 'Fraud Scenario Simulator', 'Practice real-life fraud scenarios in a safe environment. Build recognition skills through action.', '#simulator', '10+ Scenarios', 'rgba(236,72,153,0.08)')}
          ${this.moduleCard('📋', 'Reporting Guide', 'Step-by-step instructions for reporting fraud via 1930, cybercrime.gov.in, bank, and police.', '#reporting', '5 Step Guide', 'rgba(16,185,129,0.08)')}
          ${this.moduleCard('🤖', 'Help Chatbot', 'Ask any cyber safety question and get instant answers from our verified knowledge base.', '#chatbot', '24×7 Available', 'rgba(99,102,241,0.08)')}
          ${this.moduleCard('📥', 'Offline Awareness Kit', 'Download posters, checklists, and trainer materials for offline awareness sessions.', '#offline-kit', 'Downloadable', 'rgba(20,184,166,0.08)')}
          ${isStudent
            ? this.moduleCard('🎓', 'My Certificate', certEligible ? 'Download your completion certificate!' : 'Complete 5 lessons and pass 3 quizzes to unlock.', '#certificate', certEligible ? '✅ Ready' : '🔒 Locked', 'rgba(245,158,11,0.08)')
            : this.moduleCard('🏆', 'Points & Rewards', `You have ${points} points. Earn badges by completing activities.`, '#rewards', `${points} Points`, 'rgba(245,158,11,0.08)')
          }
        </div>

        <!-- Quick Stats -->
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:12px; margin-top:24px;">
          ${this.quickStat('📚', 'Lessons Completed', completed + ' / ' + total)}
          ${this.quickStat('✅', 'Quizzes Passed', Object.values(Helpers.getProgress().quizResults || {}).filter(r=>r.passed).length + '')}
          ${this.quickStat('🔍', 'Scam Checks Done', (Helpers.getProgress().scamChecks || 0) + '')}
          ${this.quickStat('🎮', 'Simulations Done', (Helpers.getProgress().completedSims || []).length + '')}
        </div>
      </div>
    `;
  },

  moduleCard(icon, title, desc, href, meta, gradient) {
    return `
      <div class="module-card" style="--card-gradient:linear-gradient(135deg,${gradient},transparent);" onclick="location.hash='${href}'">
        <span class="module-icon">${icon}</span>
        <div>
          <div class="module-title">${title}</div>
          <div class="module-desc">${desc}</div>
        </div>
        <div class="module-meta">
          <span class="module-count">${meta}</span>
          <span class="module-arrow">→</span>
        </div>
      </div>
    `;
  },

  quickStat(icon, label, value) {
    return `
      <div class="stat-card">
        <div style="font-size:1.6rem; margin-bottom:4px;">${icon}</div>
        <div class="stat-card-value">${value}</div>
        <div class="stat-card-label">${label}</div>
      </div>
    `;
  },

  getGreeting() {
    const h = new Date().getHours();
    if (h < 12) return '☀️ Good Morning!';
    if (h < 17) return '🌤️ Good Afternoon!';
    return '🌙 Good Evening!';
  },

  init() {}
};

window.DashboardPage = DashboardPage;
