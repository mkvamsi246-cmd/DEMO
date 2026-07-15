// Shared utility functions
const Helpers = {
  // LocalStorage helpers
  getUser() { try { return JSON.parse(localStorage.getItem('dss_user')) || null; } catch { return null; } },
  setUser(user) { localStorage.setItem('dss_user', JSON.stringify(user)); },
  clearUser() { localStorage.removeItem('dss_user'); },

  getProgress() { try { return JSON.parse(localStorage.getItem('dss_progress')) || {}; } catch { return {}; } },
  setProgress(p) { localStorage.setItem('dss_progress', JSON.stringify(p)); },

  markLessonComplete(lessonId) {
    const p = this.getProgress();
    if (!p.completedLessons) p.completedLessons = [];
    if (!p.completedLessons.includes(lessonId)) {
      p.completedLessons.push(lessonId);
      this.addPoints(10);
    }
    this.setProgress(p);
  },

  isLessonComplete(lessonId) {
    const p = this.getProgress();
    return (p.completedLessons || []).includes(lessonId);
  },

  markQuizPassed(quizId, score) {
    const p = this.getProgress();
    if (!p.quizResults) p.quizResults = {};
    const alreadyPassed = p.quizResults[quizId] && p.quizResults[quizId].passed;
    p.quizResults[quizId] = { score, passed: score >= 60, date: new Date().toISOString() };
    if (!alreadyPassed && score >= 60) this.addPoints(20);
    this.setProgress(p);
  },

  getQuizResult(quizId) {
    const p = this.getProgress();
    return (p.quizResults || {})[quizId] || null;
  },

  addPoints(pts) {
    const user = this.getUser();
    if (!user || user.category === 'student') return;
    const p = this.getProgress();
    p.points = (p.points || 0) + pts;
    this.setProgress(p);
  },

  getPoints() {
    const p = this.getProgress();
    return p.points || 0;
  },

  markScamCheck() {
    const p = this.getProgress();
    p.scamChecks = (p.scamChecks || 0) + 1;
    this.setProgress(p);
    this.addPoints(5);
  },

  markSimComplete(simId) {
    const p = this.getProgress();
    if (!p.completedSims) p.completedSims = [];
    if (!p.completedSims.includes(simId)) {
      p.completedSims.push(simId);
      this.addPoints(15);
    }
    this.setProgress(p);
  },

  isSimComplete(simId) {
    const p = this.getProgress();
    return (p.completedSims || []).includes(simId);
  },

  getBadges() {
    const p = this.getProgress();
    const pts = p.points || 0;
    const completed = (p.completedLessons || []).length;
    const quizPassed = Object.values(p.quizResults || {}).filter(r => r.passed).length;
    const badges = [];
    if (completed >= 1) badges.push({ name: 'First Step', icon: '🌟', desc: 'Completed your first lesson' });
    if (completed >= 5) badges.push({ name: 'Learner', icon: '📚', desc: 'Completed 5 lessons' });
    if (completed >= 10) badges.push({ name: 'Scholar', icon: '🎓', desc: 'Completed 10 lessons' });
    if (completed >= 20) badges.push({ name: 'Expert', icon: '🏆', desc: 'Completed all 20+ lessons' });
    if (quizPassed >= 1) badges.push({ name: 'Quiz Starter', icon: '✅', desc: 'Passed your first quiz' });
    if (quizPassed >= 5) badges.push({ name: 'Quiz Master', icon: '🥇', desc: 'Passed 5 quizzes' });
    if (pts >= 100) badges.push({ name: 'Century', icon: '💯', desc: 'Earned 100 points' });
    if (pts >= 500) badges.push({ name: 'Champion', icon: '🏆', desc: 'Earned 500 points' });
    if ((p.scamChecks || 0) >= 1) badges.push({ name: 'Fraud Detector', icon: '🔍', desc: 'Used Scam Checker' });
    if ((p.completedSims || []).length >= 3) badges.push({ name: 'Simulator Pro', icon: '🎮', desc: 'Completed 3 simulations' });
    return badges;
  },

  // Certificate eligibility check (students only)
  isCertificateEligible() {
    const user = this.getUser();
    if (!user || user.category !== 'student') return false;
    const p = this.getProgress();
    const completed = (p.completedLessons || []).length;
    const quizPassed = Object.values(p.quizResults || {}).filter(r => r.passed).length;
    return completed >= 5 && quizPassed >= 3;
  },

  getTotalLessons() {
    const all = LESSONS_DATA;
    return all.cyber.length + all.financial.length + all.digital.length;
  },

  getCompletionPercent() {
    const completed = (this.getProgress().completedLessons || []).length;
    const total = this.getTotalLessons();
    return total > 0 ? Math.round((completed / total) * 100) : 0;
  },

  // Format date
  formatDate(dateStr) {
    if (!dateStr) return '';
    const d = new Date(dateStr);
    return d.toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' });
  },

  // Toast notifications
  toast(message, type = 'info') {
    const existing = document.getElementById('toast-container');
    if (existing) existing.remove();
    const container = document.createElement('div');
    container.id = 'toast-container';
    const colors = { info: '#3b82f6', success: '#10b981', warning: '#f59e0b', error: '#ef4444' };
    container.innerHTML = `
      <div style="
        position:fixed; bottom:24px; right:24px; z-index:9999;
        background:${colors[type] || colors.info}; color:#fff;
        padding:14px 20px; border-radius:12px; font-weight:600;
        box-shadow:0 8px 32px rgba(0,0,0,0.3); font-family:Inter,sans-serif;
        animation: slideInToast 0.3s ease; max-width:320px; font-size:0.9rem;
      ">${message}</div>
    `;
    document.body.appendChild(container);
    setTimeout(() => container.remove(), 3500);
  },

  // Confirm dialog
  confirm(message) {
    return window.confirm(message);
  },

  // Scroll to top
  scrollTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  },

  // Sanitize HTML
  sanitize(str) {
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }
};

window.Helpers = Helpers;
