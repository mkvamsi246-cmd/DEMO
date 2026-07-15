// Rewards & Points Page — Citizens
const RewardsPage = {
  render() {
    const user = Helpers.getUser();
    if (!user) return '<p>Not logged in.</p>';

    if (user.category === 'student') {
      return `
        <div class="rewards-page">
          <div class="page-header"><h1>🏆 Points & Rewards</h1></div>
          <div class="alert alert-info">
            🎓 Students earn <strong>Certificates</strong> instead of points. Check your <a href="#certificate" style="color:var(--blue-pale);">Certificate</a> status!
          </div>
        </div>
      `;
    }

    const points = Helpers.getPoints();
    const badges = Helpers.getBadges();
    const p = Helpers.getProgress();
    const completed = (p.completedLessons || []).length;
    const quizPassed = Object.values(p.quizResults || {}).filter(r => r.passed).length;
    const simsDone = (p.completedSims || []).length;
    const scamChecks = p.scamChecks || 0;

    const allBadges = [
      { name: 'First Step', icon: '🌟', desc: 'Complete your first lesson', unlock: completed >= 1 },
      { name: 'Learner', icon: '📚', desc: 'Complete 5 lessons', unlock: completed >= 5 },
      { name: 'Scholar', icon: '🎓', desc: 'Complete 10 lessons', unlock: completed >= 10 },
      { name: 'Expert', icon: '🏆', desc: 'Complete 20+ lessons', unlock: completed >= 20 },
      { name: 'Quiz Starter', icon: '✅', desc: 'Pass your first quiz', unlock: quizPassed >= 1 },
      { name: 'Quiz Master', icon: '🥇', desc: 'Pass 5 quizzes', unlock: quizPassed >= 5 },
      { name: 'Century', icon: '💯', desc: 'Earn 100 points', unlock: points >= 100 },
      { name: 'Champion', icon: '🏆', desc: 'Earn 500 points', unlock: points >= 500 },
      { name: 'Fraud Detector', icon: '🔍', desc: 'Use Scam Checker', unlock: scamChecks >= 1 },
      { name: 'Simulator Pro', icon: '🎮', desc: 'Complete 3 simulations', unlock: simsDone >= 3 },
    ];

    const tier = points >= 500 ? { name: 'Champion', color: '#f59e0b', icon: '🏆' }
                : points >= 200 ? { name: 'Advanced', color: '#8b5cf6', icon: '💎' }
                : points >= 100 ? { name: 'Learner', color: '#3b82f6', icon: '🎓' }
                : { name: 'Beginner', color: '#64748b', icon: '🌱' };

    return `
      <div class="rewards-page">
        <div class="page-header">
          <h1>🏆 Points & Rewards</h1>
          <p>Earn points for every learning activity. Unlock badges and climb the ranks!</p>
        </div>

        <!-- Points Hero -->
        <div class="points-hero">
          <div style="position:absolute; top:0; left:0; right:0; bottom:0; background:radial-gradient(ellipse at center, rgba(245,158,11,0.1), transparent); pointer-events:none;"></div>
          <div style="position:relative;">
            <div class="points-value">${points}</div>
            <div class="points-label">Total Points Earned</div>
            <div style="display:inline-flex; align-items:center; gap:8px; background:rgba(${tier.color === '#f59e0b' ? '245,158,11' : tier.color === '#8b5cf6' ? '139,92,246' : tier.color === '#3b82f6' ? '59,130,246' : '100,116,139'},0.2); border:1px solid ${tier.color}40; border-radius:20px; padding:6px 16px;">
              <span>${tier.icon}</span>
              <span style="font-weight:700; font-size:0.85rem; color:${tier.color};">${tier.name} Tier</span>
            </div>
          </div>
        </div>

        <!-- Points Breakdown -->
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(180px, 1fr)); gap:12px; margin-bottom:24px;">
          ${[
            ['📚', 'Lessons Done', completed, '+10 pts each'],
            ['✅', 'Quizzes Passed', quizPassed, '+20 pts each'],
            ['🔍', 'Scam Checks', scamChecks, '+5 pts each'],
            ['🎮', 'Simulations', simsDone, '+15 pts each']
          ].map(([icon, label, val, note]) => `
            <div class="stat-card">
              <div style="font-size:1.6rem; margin-bottom:4px;">${icon}</div>
              <div class="stat-card-value">${val}</div>
              <div class="stat-card-label">${label}</div>
              <div style="font-size:0.65rem; color:var(--saffron); margin-top:4px;">${note}</div>
            </div>
          `).join('')}
        </div>

        <!-- How to Earn More -->
        <div class="card" style="margin-bottom:24px;">
          <h3 style="font-family:var(--font-heading); font-weight:700; margin-bottom:14px;">💡 How to Earn More Points</h3>
          <div style="display:flex; flex-direction:column; gap:10px; font-size:0.85rem; color:var(--text-secondary);">
            <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--glass); border-radius:8px;">
              <span>📖 Complete any lesson</span><span style="color:var(--saffron); font-weight:700;">+10 pts</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--glass); border-radius:8px;">
              <span>🧠 Pass a quiz (60%+)</span><span style="color:var(--saffron); font-weight:700;">+20 pts</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--glass); border-radius:8px;">
              <span>🔍 Use Scam Checker</span><span style="color:var(--saffron); font-weight:700;">+5 pts</span>
            </div>
            <div style="display:flex; justify-content:space-between; align-items:center; padding:8px 12px; background:var(--glass); border-radius:8px;">
              <span>🎮 Complete a simulation</span><span style="color:var(--saffron); font-weight:700;">+15 pts</span>
            </div>
          </div>
        </div>

        <!-- Badges -->
        <h2 class="section-title">🏅 Your Badges</h2>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:16px;">${badges.length} of ${allBadges.length} badges earned</p>
        <div class="badges-grid">
          ${allBadges.map(b => `
            <div class="badge-card ${b.unlock ? '' : 'locked'}">
              <div class="badge-icon">${b.unlock ? b.icon : '🔒'}</div>
              <div class="badge-name">${b.name}</div>
              <div class="badge-desc">${b.desc}</div>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  init() {}
};

window.RewardsPage = RewardsPage;
