// Admin & Volunteer Dashboard
const AdminPage = {
  activeTab: 'overview',

  render() {
    const user = Helpers.getUser();
    if (!user || (user.role !== 'admin' && user.role !== 'volunteer')) {
      return `
        <div class="admin-page">
          <div class="page-header"><h1>👨‍💼 Admin / Volunteer Panel</h1></div>
          <div class="alert alert-warning">
            🔒 This section is restricted. Login with Admin (code: ADMIN246) or Volunteer (code: VOLUNTEER246) credentials.
            <br><br><a href="#" onclick="App.logout()" style="color:var(--saffron);">← Go back and login with correct code</a>
          </div>
        </div>
      `;
    }
    return this.renderPanel(user);
  },

  renderPanel(user) {
    const p = Helpers.getProgress();
    const completed = (p.completedLessons || []).length;
    const quizPassed = Object.values(p.quizResults || {}).filter(r => r.passed).length;

    return `
      <div class="admin-page">
        <div class="page-header">
          <h1>👨‍💼 ${user.role === 'admin' ? 'Admin' : 'Volunteer'} Dashboard</h1>
          <p>Welcome, ${user.name} · ${user.districtName} District</p>
        </div>

        <div class="admin-tabs">
          <button class="admin-tab ${this.activeTab === 'overview' ? 'active' : ''}" onclick="AdminPage.switchTab('overview')">&#128202; Overview</button>
          ${user.role === 'admin' ? `
            <button class="admin-tab ${this.activeTab === 'volunteers' ? 'active' : ''}" onclick="AdminPage.switchTab('volunteers')">&#129309; Manage Volunteers</button>
            <button class="admin-tab ${this.activeTab === 'news' ? 'active' : ''}" onclick="AdminPage.switchTab('news')">&#128240; Manage Alerts</button>
            <button class="admin-tab ${this.activeTab === 'users' ? 'active' : ''}" onclick="AdminPage.switchTab('users')">&#128101; Users</button>
            <button class="admin-tab ${this.activeTab === 'reports' ? 'active' : ''}" onclick="AdminPage.switchTab('reports')">&#128203; Reports</button>
          ` : ''}
          <button class="admin-tab ${this.activeTab === 'sessions' ? 'active' : ''}" onclick="AdminPage.switchTab('sessions')">&#128221; Log Session</button>
        </div>

        <div id="admin-tab-content">
          ${this.tabContent(this.activeTab, user)}
        </div>
      </div>
    `;
  },

  switchTab(tab) {
    this.activeTab = tab;
    const user = Helpers.getUser();
    document.getElementById('admin-tab-content').innerHTML = this.tabContent(tab, user);
    // Update tabs
    document.querySelectorAll('.admin-tab').forEach(t => t.classList.remove('active'));
    event.target.classList.add('active');
  },

  tabContent(tab, user) {
    if (tab === 'overview') return this.overviewTab();
    if (tab === 'volunteers') return this.volunteersTab();
    if (tab === 'news') return this.newsTab();
    if (tab === 'users') return this.usersTab();
    if (tab === 'reports') return this.reportsTab();
    if (tab === 'sessions') return this.sessionsTab();
    return '';
  },

  volunteersTab() {
    const volunteers = JSON.parse(localStorage.getItem('dss_volunteers') || '[]');
    return `
      <div style="animation:fadeIn 0.3s ease;">
        <h3 style="font-family:var(--font-heading); font-weight:700; margin-bottom:6px;">&#129309; Volunteer Management</h3>
        <p style="font-size:0.8rem; color:var(--text-muted); margin-bottom:20px;">Create access codes for volunteers. Only you (Admin) can create and revoke volunteer access.</p>

        <!-- Add Volunteer Form -->
        <div class="card-glass" style="margin-bottom:24px;">
          <h4 style="font-family:var(--font-heading); font-weight:700; font-size:0.9rem; margin-bottom:14px; color:var(--saffron);">+ Add New Volunteer</h4>
          <div style="display:grid; grid-template-columns:1fr 1fr; gap:12px;">
            <div class="form-group">
              <label class="form-label">Volunteer Name</label>
              <input type="text" id="vol-name" class="form-input" placeholder="e.g. Ravi Kumar" />
            </div>
            <div class="form-group">
              <label class="form-label">Assigned District</label>
              <select id="vol-district" class="form-select">
                <option value="">Select District</option>
                ${window.AP_DISTRICTS.map(d => '<option value="' + d.id + '">' + d.name + '</option>').join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Role / Specialization</label>
              <select id="vol-role" class="form-select">
                <option value="Field Volunteer">Field Volunteer</option>
                <option value="School Coordinator">School Coordinator</option>
                <option value="CSC Coordinator">CSC Coordinator</option>
                <option value="Panchayat Coordinator">Panchayat Coordinator</option>
                <option value="District Head">District Head</option>
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Access Code <span style="font-size:0.7rem; color:var(--text-muted);">(min 6 chars)</span></label>
              <div style="display:flex; gap:8px;">
                <input type="text" id="vol-code" class="form-input" placeholder="e.g. VOL@VIZ2024" style="text-transform:uppercase;" />
                <button class="btn btn-secondary btn-sm" onclick="AdminPage.generateCode()" style="white-space:nowrap;">Auto Generate</button>
              </div>
            </div>
          </div>
          <div class="form-group" style="margin-top:4px;">
            <label class="form-label">Phone Number <span style="font-size:0.7rem; color:var(--text-muted);">(optional)</span></label>
            <input type="tel" id="vol-phone" class="form-input" placeholder="e.g. 9876543210" />
          </div>
          <button class="btn btn-primary" style="margin-top:8px;" onclick="AdminPage.addVolunteer()">&#10003; Add Volunteer</button>
        </div>

        <!-- Volunteer List -->
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:12px;">
          <h4 style="font-family:var(--font-heading); font-weight:700; font-size:0.9rem;">Active Volunteers (${volunteers.filter(v => v.active).length})</h4>
          <span style="font-size:0.75rem; color:var(--text-muted);">${volunteers.length} total created</span>
        </div>
        ${volunteers.length === 0 ? `
          <div style="text-align:center; padding:32px; background:var(--glass); border:1px solid var(--glass-border); border-radius:12px;">
            <div style="font-size:2.5rem; margin-bottom:8px;">&#129309;</div>
            <p style="color:var(--text-muted); font-size:0.85rem;">No volunteers added yet. Add your first volunteer above.</p>
          </div>
        ` : `
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${volunteers.map((v, i) => `
              <div style="background:var(--glass); border:1px solid ${v.active ? 'rgba(16,185,129,0.25)' : 'rgba(100,116,139,0.2)'}; border-radius:12px; padding:14px; display:flex; align-items:center; gap:14px;">
                <div style="width:40px; height:40px; border-radius:50%; background:${v.active ? 'rgba(16,185,129,0.15)' : 'rgba(100,116,139,0.1)'}; display:flex; align-items:center; justify-content:center; font-size:1.2rem; flex-shrink:0;">&#129309;</div>
                <div style="flex:1; min-width:0;">
                  <div style="font-weight:700; font-size:0.88rem; color:var(--text-primary);">${v.name}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">${v.role} &nbsp;&#183;&nbsp; ${v.districtName}${v.phone ? ' &nbsp;&#183;&nbsp; ' + v.phone : ''}</div>
                  <div style="margin-top:6px; display:flex; align-items:center; gap:6px;">
                    <span style="font-size:0.7rem; background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:6px; padding:2px 8px; color:var(--saffron); font-weight:600; letter-spacing:1px; font-family:monospace;">${v.code}</span>
                    <button onclick="AdminPage.copyCode('${v.code}')" style="background:none; border:none; cursor:pointer; color:var(--text-muted); font-size:0.75rem; padding:0;">Copy</button>
                  </div>
                </div>
                <div style="display:flex; gap:8px; flex-shrink:0;">
                  <button class="btn btn-sm" style="background:${v.active ? 'rgba(239,68,68,0.1)' : 'rgba(16,185,129,0.1)'}; color:${v.active ? 'var(--crimson-light)' : 'var(--emerald-light)'}; border:1px solid ${v.active ? 'rgba(239,68,68,0.3)' : 'rgba(16,185,129,0.3)'};" onclick="AdminPage.toggleVolunteer(${i})">${v.active ? 'Revoke' : 'Restore'}</button>
                  <button class="btn btn-sm" style="background:rgba(239,68,68,0.08); color:var(--crimson-light); border:1px solid rgba(239,68,68,0.2);" onclick="AdminPage.deleteVolunteer(${i})">Delete</button>
                </div>
              </div>
            `).join('')}
          </div>
        `}
      </div>
    `;
  },

  generateCode() {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let code = 'VOL';
    for (let i = 0; i < 5; i++) code += chars[Math.floor(Math.random() * chars.length)];
    document.getElementById('vol-code').value = code;
  },

  addVolunteer() {
    const name = document.getElementById('vol-name').value.trim();
    const districtId = document.getElementById('vol-district').value;
    const role = document.getElementById('vol-role').value;
    const code = document.getElementById('vol-code').value.trim().toUpperCase();
    const phone = document.getElementById('vol-phone').value.trim();

    if (!name) { Helpers.toast('Please enter volunteer name', 'error'); return; }
    if (!districtId) { Helpers.toast('Please select district', 'error'); return; }
    if (!code || code.length < 6) { Helpers.toast('Access code must be at least 6 characters', 'error'); return; }
    if (code === 'ADMIN2024') { Helpers.toast('Cannot use reserved admin code', 'error'); return; }

    const volunteers = JSON.parse(localStorage.getItem('dss_volunteers') || '[]');
    const exists = volunteers.find(v => v.code === code);
    if (exists) { Helpers.toast('That access code is already in use. Choose a different one.', 'error'); return; }

    const district = window.AP_DISTRICTS.find(d => d.id === districtId);
    volunteers.push({
      id: Date.now(),
      name, districtId, districtName: district ? district.name : districtId,
      role, code, phone, active: true,
      createdAt: new Date().toISOString()
    });
    localStorage.setItem('dss_volunteers', JSON.stringify(volunteers));

    // Clear form
    document.getElementById('vol-name').value = '';
    document.getElementById('vol-district').value = '';
    document.getElementById('vol-code').value = '';
    document.getElementById('vol-phone').value = '';

    Helpers.toast('Volunteer added! Share code "' + code + '" with them to login.', 'success');
    document.getElementById('admin-tab-content').innerHTML = this.tabContent('volunteers', Helpers.getUser());
  },

  toggleVolunteer(index) {
    const volunteers = JSON.parse(localStorage.getItem('dss_volunteers') || '[]');
    if (volunteers[index]) {
      volunteers[index].active = !volunteers[index].active;
      localStorage.setItem('dss_volunteers', JSON.stringify(volunteers));
      const status = volunteers[index].active ? 'Volunteer access restored.' : 'Volunteer access revoked.';
      Helpers.toast(status, 'info');
      document.getElementById('admin-tab-content').innerHTML = this.tabContent('volunteers', Helpers.getUser());
    }
  },

  deleteVolunteer(index) {
    if (!confirm('Permanently delete this volunteer? Their access code will stop working immediately.')) return;
    const volunteers = JSON.parse(localStorage.getItem('dss_volunteers') || '[]');
    volunteers.splice(index, 1);
    localStorage.setItem('dss_volunteers', JSON.stringify(volunteers));
    Helpers.toast('Volunteer removed.', 'info');
    document.getElementById('admin-tab-content').innerHTML = this.tabContent('volunteers', Helpers.getUser());
  },

  copyCode(code) {
    navigator.clipboard.writeText(code).then(() => Helpers.toast('Code copied: ' + code, 'success')).catch(() => Helpers.toast('Code: ' + code, 'info'));
  },

  overviewTab() {
    // Simulate platform stats
    const districtStats = window.AP_DISTRICTS.slice(0, 8).map(d => ({
      name: d.name,
      users: Math.floor(Math.random() * 500 + 50),
      completions: Math.floor(Math.random() * 200 + 10),
      rate: Math.floor(Math.random() * 80 + 20)
    }));

    return `
      <div style="animation:fadeIn 0.3s ease;">
        <div class="stats-grid">
          ${[
        ['👥', '12,450', 'Total Registered Users'],
        ['📚', '8,231', 'Lessons Completed'],
        ['✅', '3,120', 'Certificates Issued'],
        ['🏆', '5,890', 'Quizzes Passed'],
        ['🔍', '2,340', 'Scam Checks Done'],
        ['📍', '26', 'Districts Active']
      ].map(([icon, val, label]) => `
            <div class="stat-card">
              <div style="font-size:1.8rem; margin-bottom:4px;">${icon}</div>
              <div class="stat-card-value">${val}</div>
              <div class="stat-card-label">${label}</div>
            </div>
          `).join('')}
        </div>

        <h3 class="section-title" style="margin-top:24px;">📍 District-wise Activity (Sample)</h3>
        <div style="background:var(--glass); border:1px solid var(--glass-border); border-radius:var(--radius); overflow:hidden;">
          <table class="data-table">
            <thead>
              <tr>
                <th>District</th>
                <th>Users</th>
                <th>Completions</th>
                <th>Completion Rate</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${districtStats.map(d => `
                <tr>
                  <td style="font-weight:600; color:var(--text-primary);">${d.name}</td>
                  <td>${d.users.toLocaleString()}</td>
                  <td>${d.completions.toLocaleString()}</td>
                  <td>
                    <div style="display:flex; align-items:center; gap:8px;">
                      <div style="flex:1; height:6px; background:var(--glass); border-radius:3px; overflow:hidden;">
                        <div style="width:${d.rate}%; height:100%; background:linear-gradient(90deg,var(--blue),var(--emerald)); border-radius:3px;"></div>
                      </div>
                      <span style="font-size:0.78rem; color:var(--saffron); font-weight:600;">${d.rate}%</span>
                    </div>
                  </td>
                  <td><span style="font-size:0.7rem; padding:2px 8px; border-radius:4px; background:rgba(16,185,129,0.2); color:var(--emerald-light);">Active</span></td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <button class="btn btn-secondary btn-sm" style="margin-top:12px;" onclick="AdminPage.exportCSV()">📥 Export to CSV</button>
      </div>
    `;
  },

  newsTab() {
    return `
      <div style="animation:fadeIn 0.3s ease;">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="font-family:var(--font-heading); font-weight:700;">📰 Cyber Crime Alerts</h3>
          <button class="btn btn-primary btn-sm" onclick="AdminPage.addAlert()">+ Add Alert</button>
        </div>
        <div style="display:flex; flex-direction:column; gap:10px;">
          ${(window.CYBER_NEWS || []).map((n, i) => `
            <div style="background:var(--glass); border:1px solid var(--glass-border); border-radius:10px; padding:14px; display:flex; align-items:flex-start; gap:12px;">
              <span class="news-card-tag tag-${n.tagColor}">${n.tag}</span>
              <div style="flex:1;">
                <div style="font-weight:600; font-size:0.85rem; margin-bottom:3px;">${n.title}</div>
                <div style="font-size:0.75rem; color:var(--text-muted);">${n.date} · ${n.source}</div>
              </div>
              <button onclick="AdminPage.editAlert(${i})" class="btn btn-secondary btn-sm">Edit</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  usersTab() {
    const sampleUsers = [
      { name: 'Ravi Kumar', category: 'student', district: 'Visakhapatnam', college: 'Andhra University', completed: 8, quizPassed: 5 },
      { name: 'Lakshmi Devi', category: 'citizen', district: 'Guntur', place: 'SBI Guntur Main', completed: 3, points: 55 },
      { name: 'Suresh Babu', category: 'student', district: 'Nellore', college: 'SPSR Engineering College', completed: 12, quizPassed: 8 },
      { name: 'Padma Rao', category: 'citizen', district: 'Kurnool', place: 'CSC Kurnool', completed: 5, points: 90 },
      { name: 'Venkat Reddy', category: 'student', district: 'Tirupati', college: 'SVU, Tirupati', completed: 7, quizPassed: 4 }
    ];
    return `
      <div style="animation:fadeIn 0.3s ease;">
        <div style="display:flex; gap:12px; margin-bottom:16px; flex-wrap:wrap;">
          <input class="form-input" placeholder="Search user..." style="max-width:240px; padding:8px 12px; font-size:0.82rem;" />
          <select class="form-select" style="max-width:160px; padding:8px 12px; font-size:0.82rem;">
            <option>All Districts</option>
            ${window.AP_DISTRICTS.map(d => `<option>${d.name}</option>`).join('')}
          </select>
        </div>
        <div style="background:var(--glass); border:1px solid var(--glass-border); border-radius:var(--radius); overflow:hidden; overflow-x:auto;">
          <table class="data-table" style="min-width:600px;">
            <thead>
              <tr>
                <th>Name</th>
                <th>Category</th>
                <th>District</th>
                <th>Institution / Place</th>
                <th>Lessons Done</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              ${sampleUsers.map(u => `
                <tr>
                  <td style="font-weight:600; color:var(--text-primary);">${u.name}</td>
                  <td><span style="font-size:0.7rem; padding:2px 8px; border-radius:4px; background:${u.category === 'student' ? 'rgba(37,99,235,0.2)' : 'rgba(16,185,129,0.2)'}; color:${u.category === 'student' ? 'var(--blue-pale)' : 'var(--emerald-light)'};">${u.category}</span></td>
                  <td>${u.district}</td>
                  <td style="font-size:0.78rem;">${u.college || u.place}</td>
                  <td>${u.completed}</td>
                  <td>${u.category === 'student' ? (u.quizPassed >= 3 && u.completed >= 5 ? '<span style="color:var(--emerald-light); font-size:0.78rem;">✅ Certificate</span>' : '<span style="color:var(--saffron); font-size:0.78rem;">In Progress</span>') : `<span style="color:var(--saffron); font-size:0.78rem;">${u.points || 0} pts</span>`}</td>
                </tr>
              `).join('')}
            </tbody>
          </table>
        </div>
        <p style="font-size:0.72rem; color:var(--text-muted); margin-top:8px;">Showing sample data. In a real deployment, this would load from the backend.</p>
      </div>
    `;
  },

  reportsTab() {
    return `
      <div style="animation:fadeIn 0.3s ease;">
        <h3 style="font-family:var(--font-heading); font-weight:700; margin-bottom:16px;">📋 Exportable Reports</h3>
        <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(240px, 1fr)); gap:16px;">
          ${[
        ['📊', 'District-wise Completion Report', 'Completion rates by district', 'District Report'],
        ['👥', 'User Registration Report', 'New registrations over time', 'User Report'],
        ['📚', 'Module Completion Report', 'Per-module completion rates', 'Module Report'],
        ['🔍', 'Scam Checker Usage', 'How many checks per district', 'Checker Report'],
        ['🎮', 'Simulation Completion', 'Simulation attempt and pass rates', 'Sim Report'],
        ['🎓', 'Certificate Issuance', 'Students who earned certificates', 'Cert Report']
      ].map(([icon, title, desc, btnLabel]) => `
            <div class="card">
              <div style="font-size:2rem; margin-bottom:8px;">${icon}</div>
              <div style="font-weight:700; font-size:0.9rem; margin-bottom:4px;">${title}</div>
              <div style="font-size:0.75rem; color:var(--text-muted); margin-bottom:14px;">${desc}</div>
              <button class="btn btn-secondary btn-sm" onclick="AdminPage.exportCSV('${btnLabel}')">📥 Export CSV</button>
            </div>
          `).join('')}
        </div>
      </div>
    `;
  },

  sessionsTab() {
    const sessions = JSON.parse(localStorage.getItem('dss_sessions') || '[]');
    return `
      <div style="animation:fadeIn 0.3s ease;">
        <h3 style="font-family:var(--font-heading); font-weight:700; margin-bottom:16px;">📝 Log Awareness Session</h3>
        <div class="card-glass" style="margin-bottom:20px;">
          <div style="display:flex; flex-direction:column; gap:12px;">
            <div class="form-group">
              <label class="form-label">Session Date</label>
              <input type="date" id="sess-date" class="form-input" value="${new Date().toISOString().split('T')[0]}" />
            </div>
            <div class="form-group">
              <label class="form-label">District</label>
              <select id="sess-district" class="form-select">
                <option value="">Select District</option>
                ${window.AP_DISTRICTS.map(d => `<option value="${d.id}">${d.name}</option>`).join('')}
              </select>
            </div>
            <div class="form-group">
              <label class="form-label">Venue / Place</label>
              <input type="text" id="sess-venue" class="form-input" placeholder="e.g. Gram Panchayat Hall, Vijayawada" />
            </div>
            <div class="form-group">
              <label class="form-label">Number of Attendees</label>
              <input type="number" id="sess-count" class="form-input" placeholder="e.g. 45" min="1" />
            </div>
            <div class="form-group">
              <label class="form-label">Topics Covered</label>
              <textarea id="sess-topics" class="form-textarea" style="min-height:80px;" placeholder="e.g. UPI fraud prevention, Digital arrest scam awareness, 1930 helpline"></textarea>
            </div>
            <button class="btn btn-primary" onclick="AdminPage.logSession()">✅ Log Session</button>
          </div>
        </div>

        ${sessions.length > 0 ? `
          <h3 class="section-title">📋 Logged Sessions</h3>
          <div style="display:flex; flex-direction:column; gap:10px;">
            ${sessions.slice(-5).reverse().map(s => `
              <div style="background:var(--glass); border:1px solid var(--glass-border); border-radius:10px; padding:14px;">
                <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
                  <span style="font-weight:700; font-size:0.88rem;">${s.venue}</span>
                  <span style="font-size:0.75rem; color:var(--saffron);">${s.count} attendees</span>
                </div>
                <div style="font-size:0.75rem; color:var(--text-muted);">${s.date} · ${s.district}</div>
                <div style="font-size:0.78rem; color:var(--text-secondary); margin-top:4px;">${s.topics}</div>
              </div>
            `).join('')}
          </div>
        ` : ''}
      </div>
    `;
  },

  logSession() {
    const date = document.getElementById('sess-date')?.value;
    const districtId = document.getElementById('sess-district')?.value;
    const venue = document.getElementById('sess-venue')?.value?.trim();
    const count = document.getElementById('sess-count')?.value;
    const topics = document.getElementById('sess-topics')?.value?.trim();

    if (!date || !districtId || !venue || !count) {
      Helpers.toast('Please fill all required fields.', 'error'); return;
    }

    const district = window.AP_DISTRICTS.find(d => d.id === districtId);
    const sessions = JSON.parse(localStorage.getItem('dss_sessions') || '[]');
    sessions.push({
      date, district: district?.name || districtId, venue, count: parseInt(count), topics,
      loggedAt: new Date().toISOString()
    });
    localStorage.setItem('dss_sessions', JSON.stringify(sessions));
    Helpers.toast('✅ Session logged successfully!', 'success');
    // Refresh tab
    document.getElementById('admin-tab-content').innerHTML = this.tabContent('sessions', Helpers.getUser());
  },

  addAlert() {
    Helpers.toast('Alert editor would open in a full backend implementation. This is a frontend demo.', 'info');
  },

  editAlert(i) {
    Helpers.toast(`Editing alert #${i + 1}. In production, this opens an edit form.`, 'info');
  },

  exportCSV(reportName) {
    // Generate sample CSV
    const rows = [['District', 'Users', 'Completions', 'Rate(%)']];
    window.AP_DISTRICTS.forEach(d => {
      rows.push([d.name, Math.floor(Math.random() * 500 + 50), Math.floor(Math.random() * 200 + 10), Math.floor(Math.random() * 80 + 20) + '%']);
    });
    const csv = rows.map(r => r.join(',')).join('\n');
    const blob = new Blob([csv], { type: 'text/csv' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `DSS_${(reportName || 'Report').replace(/ /g, '_')}_${new Date().toISOString().split('T')[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
    Helpers.toast('✅ Report exported!', 'success');
  },

  init() { }
};

window.AdminPage = AdminPage;
