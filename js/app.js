// App Router & Main Application Controller
const App = {
  currentRoute: null,

  // Route definitions
  routes: {
    'login': { page: null, requiresAuth: false, title: 'Login' },
    'dashboard': { page: 'DashboardPage', requiresAuth: true, title: 'Dashboard' },
    'cyber': { page: 'HubPage', requiresAuth: true, title: 'Cyber Crime Hub', hub: 'cyber' },
    'financial': { page: 'HubPage', requiresAuth: true, title: 'Financial Literacy Hub', hub: 'financial' },
    'digital': { page: 'HubPage', requiresAuth: true, title: 'Digital Literacy Hub', hub: 'digital' },
    'scam-checker': { page: 'ScamCheckerPage', requiresAuth: true, title: 'Scam Checker' },
    'reporting': { page: 'ReportingPage', requiresAuth: true, title: 'Reporting Guide' },
    'simulator': { page: 'SimulatorPage', requiresAuth: true, title: 'Fraud Simulator' },
    'chatbot': { page: 'ChatbotPage', requiresAuth: true, title: 'Help Chatbot' },
    'certificate': { page: 'CertificatePage', requiresAuth: true, title: 'Certificate' },
    'rewards': { page: 'RewardsPage', requiresAuth: true, title: 'Rewards' },
    'admin': { page: 'AdminPage', requiresAuth: true, title: 'Admin' },
    'offline-kit': { page: 'OfflineKitPage', requiresAuth: true, title: 'Offline Kit' }
  },

  init() {
    // Hash routing
    window.addEventListener('hashchange', () => this.handleRoute());
    // Initial route
    setTimeout(() => {
      document.getElementById('loading-screen')?.remove();
      this.handleRoute();
    }, 800);
  },

  handleRoute() {
    let hash = window.location.hash.replace('#', '').trim() || '';
    const user = Helpers.getUser();

    // Default routing
    if (!hash || hash === 'login') {
      if (user) {
        this.navigate('dashboard');
        return;
      }
      this.showLogin();
      return;
    }

    const route = this.routes[hash];
    if (!route) {
      if (user) {
        this.navigate('dashboard');
      } else {
        this.showLogin();
      }
      return;
    }

    if (route.requiresAuth && !user) {
      this.showLogin();
      return;
    }

    this.currentRoute = hash;
    this.renderPage(hash, route);
    this.updateNav(hash);
    this.updateSidebar(user);
    this.updateNavUser(user);
    document.title = `${route.title} — Secure Future`;
  },

  navigate(route) {
    window.location.hash = route;
  },

  showLogin() {
    this.hideDashboardUI();
    const content = document.getElementById('page-content');
    content.classList.remove('with-sidebar');
    content.innerHTML = LoginPage.render();
    LoginPage.init();
    document.title = 'Secure Future — Login';
  },

  renderPage(hash, route) {
    this.showDashboardUI();
    const content = document.getElementById('page-content');
    content.classList.add('with-sidebar');
    content.innerHTML = this.getPageHTML(hash, route);

    // Call init if available
    const pageModule = window[route.page];
    if (pageModule && typeof pageModule.init === 'function') {
      pageModule.init();
    }
    Helpers.scrollTop();
  },

  getPageHTML(hash, route) {
    switch(hash) {
      case 'dashboard': return DashboardPage.render();
      case 'cyber':
      case 'financial':
      case 'digital': return HubPage.renderHub(hash);
      case 'scam-checker': return ScamCheckerPage.render();
      case 'reporting': return ReportingPage.render();
      case 'simulator': return SimulatorPage.render();
      case 'chatbot': return ChatbotPage.render();
      case 'certificate': return CertificatePage.render();
      case 'rewards': return RewardsPage.render();
      case 'admin': return AdminPage.render();
      case 'offline-kit': return OfflineKitPage.render();
      default: return '<div class="page-header"><h1>Page not found</h1></div>';
    }
  },

  showDashboardUI() {
    document.getElementById('navbar')?.classList.remove('hidden');
    document.getElementById('sidebar')?.classList.remove('hidden');
    document.getElementById('main-layout')?.style.setProperty('display', 'flex');
  },

  hideDashboardUI() {
    document.getElementById('navbar')?.classList.add('hidden');
    document.getElementById('sidebar')?.classList.add('hidden');
  },

  updateNav(activeRoute) {
    document.querySelectorAll('.nav-link').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === activeRoute) link.classList.add('active');
    });
    document.querySelectorAll('.sidebar-link').forEach(link => {
      link.classList.remove('active');
      const href = link.getAttribute('href')?.replace('#', '');
      if (href === activeRoute) link.classList.add('active');
    });
  },

  updateSidebar(user) {
    if (!user) return;

    // Show/hide role-specific sidebar items
    const studentLinks = document.getElementById('sidebar-student-links');
    const citizenLinks = document.getElementById('sidebar-citizen-links');
    const adminLinks = document.getElementById('sidebar-admin-links');

    if (studentLinks) studentLinks.classList.toggle('hidden', user.category !== 'student');
    if (citizenLinks) citizenLinks.classList.toggle('hidden', user.category !== 'citizen');
    // Show admin panel link for admin and volunteer roles
    const isStaff = user.role === 'admin' || user.role === 'volunteer'
                 || user.category === 'admin' || user.category === 'volunteer';
    if (adminLinks) adminLinks.classList.toggle('hidden', !isStaff);

    // Render news feed
    this.renderNewsFeed();
  },

  updateNavUser(user) {
    if (!user) return;
    const el = document.getElementById('nav-user-info');
    if (!el) return;
    const p = Helpers.getProgress();
    const points = Helpers.getPoints();
    const completed = (p.completedLessons || []).length;

    el.innerHTML = `
      <strong>${user.name}</strong><br>
      ${user.category === 'student'
        ? user.category === 'student' && completed + ' lessons done'
        : user.role === 'admin' ? 'Admin'
        : user.role === 'volunteer' ? 'Volunteer'
        : points + ' points'}
    `;
  },

  renderNewsFeed() {
    const feed = document.getElementById('news-feed');
    if (!feed) return;

    const news = (window.CYBER_NEWS || []).slice(0, 6);
    feed.innerHTML = news.map(n => `
      <div class="news-card" onclick="App.showNewsDetail(${n.id})">
        <span class="news-card-tag tag-${n.tagColor}">${n.tag}</span>
        <div class="news-card-title">${n.title}</div>
        <div class="news-card-date">📅 ${n.date} · ${n.source}</div>
      </div>
    `).join('');
  },

  showNewsDetail(id) {
    const news = (window.CYBER_NEWS || []).find(n => n.id === id);
    if (!news) return;

    // Show in a modal overlay
    const existing = document.getElementById('news-modal');
    if (existing) existing.remove();

    const modal = document.createElement('div');
    modal.id = 'news-modal';
    modal.style.cssText = `
      position:fixed; inset:0; z-index:2000;
      background:rgba(0,0,0,0.7); backdrop-filter:blur(8px);
      display:flex; align-items:center; justify-content:center; padding:20px;
    `;
    modal.innerHTML = `
      <div style="
        background:var(--navy-700); border:1px solid var(--glass-border);
        border-radius:20px; padding:28px; max-width:500px; width:100%;
        animation:bounceIn 0.4s ease; max-height:80vh; overflow-y:auto;
      ">
        <div style="display:flex; justify-content:space-between; align-items:flex-start; margin-bottom:16px;">
          <span class="news-card-tag tag-${news.tagColor}" style="font-size:0.7rem;">${news.tag}</span>
          <button onclick="document.getElementById('news-modal').remove()" style="background:none;border:none;color:var(--text-muted);cursor:pointer;font-size:1.2rem;">✕</button>
        </div>
        <h3 style="font-family:var(--font-heading); font-weight:700; font-size:1rem; margin-bottom:12px; line-height:1.4;">${news.title}</h3>
        <p style="color:var(--text-secondary); font-size:0.85rem; line-height:1.7; margin-bottom:16px;">${news.summary}</p>
        <div style="display:flex; justify-content:space-between; align-items:center; font-size:0.75rem; color:var(--text-muted);">
          <span>📅 ${news.date}</span>
          <span>📍 ${news.source}</span>
        </div>
        <div style="margin-top:16px; display:flex; gap:8px; flex-wrap:wrap;">
          <a href="tel:1930" class="btn btn-danger btn-sm">📞 Call 1930</a>
          <a href="https://cybercrime.gov.in" target="_blank" class="btn btn-secondary btn-sm">🌐 Report Online</a>
        </div>
      </div>
    `;
    modal.addEventListener('click', (e) => { if (e.target === modal) modal.remove(); });
    document.body.appendChild(modal);
  },

  logout() {
    if (confirm('Are you sure you want to logout?')) {
      Helpers.clearUser();
      this.navigate('login');
      Helpers.toast('Logged out successfully.', 'info');
    }
  }
};

// Inject global CSS animation for toast
const style = document.createElement('style');
style.textContent = `@keyframes slideInToast { from { opacity:0; transform:translateY(20px); } to { opacity:1; transform:translateY(0); } }`;
document.head.appendChild(style);

// Boot
document.addEventListener('DOMContentLoaded', () => App.init());
