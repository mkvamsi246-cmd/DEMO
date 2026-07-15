// Login Page Module
const LoginPage = {
  render() {
    return `
      <div class="login-page">
        <div class="login-bg-circles">
          <div class="circle circle-1"></div>
          <div class="circle circle-2"></div>
          <div class="circle circle-3"></div>
        </div>
        <div class="login-container">
          <div class="login-header">
            <span class="login-hero-shield">&#128737;&#65039;</span>
            <h1 class="login-title">Digital Suraksha Setu</h1>
            <p class="login-subtitle">Andhra Pradesh Cyber Safety Platform</p>
            <p class="login-tagline">&#3128;&#3136;&#3108;&#3120;&#3149; &#3097;&#3149; Digital Literacy · Financial Safety</p>
            <div class="ap-badge">&#127963;&#65039; Government of Andhra Pradesh Initiative</div>
          </div>

          <div class="login-card" id="login-card">
            <div id="login-view">
              <p style="font-size:0.82rem; color:var(--text-muted); text-align:center; margin-bottom:16px;">Select your category to get started</p>

              <!-- Main 2-category selector -->
              <div class="category-selector" id="category-selector">
                <button class="category-btn" id="cat-student" onclick="LoginPage.selectCategory('student')">
                  <span class="category-icon">&#127891;</span>
                  <span class="category-name">Student</span>
                  <span class="category-desc">School / College students</span>
                </button>
                <button class="category-btn" id="cat-citizen" onclick="LoginPage.selectCategory('citizen')">
                  <span class="category-icon">&#127960;&#65039;</span>
                  <span class="category-name">Citizen</span>
                  <span class="category-desc">General public / Community</span>
                </button>
              </div>

              <!-- Regular user form (student / citizen) -->
              <div id="login-form-area" class="hidden">
                <div class="login-divider">Fill your details</div>
                <div class="login-form" id="login-form">
                  <div class="form-group">
                    <label class="form-label">Full Name</label>
                    <input id="f-name" class="form-input" placeholder="Enter your full name" type="text" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Age Group</label>
                    <select id="f-age" class="form-select">
                      <option value="">Select Age Group</option>
                      <option>Below 18</option>
                      <option>18-25</option>
                      <option>26-35</option>
                      <option>36-50</option>
                      <option>51-60</option>
                      <option>Above 60</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">Preferred Language</label>
                    <select id="f-lang" class="form-select">
                      <option value="">Select Language</option>
                      <option>Telugu</option>
                      <option>English</option>
                      <option>Hindi</option>
                      <option>Urdu</option>
                    </select>
                  </div>
                  <div class="form-group">
                    <label class="form-label">District</label>
                    <select id="f-district" class="form-select" onchange="LoginPage.onDistrictChange()">
                      <option value="">Select District</option>
                    </select>
                  </div>
                  <div id="student-fields" class="hidden">
                    <div class="form-group">
                      <label class="form-label">College / Institution</label>
                      <select id="f-college" class="form-select">
                        <option value="">Select College</option>
                      </select>
                    </div>
                  </div>
                  <div id="citizen-fields" class="hidden">
                    <div class="form-group">
                      <label class="form-label">Place Type</label>
                      <select id="f-place-type" class="form-select" onchange="LoginPage.onPlaceTypeChange()">
                        <option value="">Select Place Type</option>
                        <option value="panchayat">Gram Panchayat</option>
                        <option value="police">Police Station</option>
                        <option value="bank">Bank Branch</option>
                        <option value="hospital">Government Hospital / PHC</option>
                        <option value="csc">Common Service Centre (CSC)</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label class="form-label">Nearby Place</label>
                      <select id="f-place" class="form-select">
                        <option value="">Select Place</option>
                      </select>
                    </div>
                  </div>
                  <button class="btn btn-primary btn-lg btn-full" onclick="LoginPage.doLogin()">
                    &#128640; Enter Platform
                  </button>
                </div>
              </div>

              <!-- Hidden Staff Access Panel -->
              <div id="admin-code-area" class="hidden" style="margin-top:16px;">
                <div class="login-divider" style="color:var(--saffron);">Staff Access</div>
                <div style="background:rgba(245,158,11,0.06); border:1px solid rgba(245,158,11,0.2); border-radius:12px; padding:16px;">
                  <div class="form-group">
                    <label class="form-label">Your Name</label>
                    <input id="f-admin-name" class="form-input" placeholder="Enter your full name" type="text" />
                  </div>
                  <div class="form-group">
                    <label class="form-label">Access Code</label>
                    <input id="f-admin-code" class="form-input" placeholder="Enter your access code" type="password" />
                    <p style="font-size:0.7rem; color:var(--text-muted); margin-top:4px;">Admin: use master code &nbsp;|&nbsp; Volunteers: use code issued by Admin</p>
                  </div>
                  <button class="btn btn-warning btn-lg btn-full" onclick="LoginPage.doAdminLogin()">
                    &#128272; Staff Login
                  </button>
                  <button class="btn btn-secondary btn-sm" style="width:100%; margin-top:8px;" onclick="LoginPage.toggleAdminCode()">
                    Back to Main Login
                  </button>
                </div>
              </div>

              <div class="login-footer">
                <p>Admin / Volunteer? <a href="#" onclick="LoginPage.toggleAdminCode(); return false;">Click here</a></p>
                <p style="margin-top:8px;">&#128274; Your data stays on your device. No account needed.</p>
              </div>
            </div>
          </div>

          <div style="text-align:center; margin-top:20px;">
            <div style="display:flex; justify-content:center; gap:20px; flex-wrap:wrap;">
              <span style="font-size:0.72rem; color:var(--text-muted);">&#128222; Cyber Helpline: <strong style="color:var(--crimson-light);">1930</strong></span>
              <span style="font-size:0.72rem; color:var(--text-muted);">&#127760; <strong style="color:var(--blue-pale);">cybercrime.gov.in</strong></span>
              <span style="font-size:0.72rem; color:var(--text-muted);">&#128682; Emergency: <strong style="color:var(--crimson-light);">112</strong></span>
            </div>
          </div>
        </div>
      </div>
    `;
  },

  selectedCategory: null,

  init() {
    this.selectedCategory = null;
    const districtSel = document.getElementById('f-district');
    if (districtSel && window.AP_DISTRICTS) {
      window.AP_DISTRICTS.forEach(d => {
        const opt = document.createElement('option');
        opt.value = d.id;
        opt.textContent = d.name;
        districtSel.appendChild(opt);
      });
    }
  },

  selectCategory(cat) {
    this.selectedCategory = cat;
    document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
    document.getElementById('cat-' + cat).classList.add('active');
    document.getElementById('login-form-area').classList.remove('hidden');
    document.getElementById('admin-code-area').classList.add('hidden');
    document.getElementById('student-fields').classList.toggle('hidden', cat !== 'student');
    document.getElementById('citizen-fields').classList.toggle('hidden', cat !== 'citizen');
  },

  toggleAdminCode() {
    const adminArea = document.getElementById('admin-code-area');
    const formArea = document.getElementById('login-form-area');
    const isHidden = adminArea.classList.contains('hidden');
    if (isHidden) {
      adminArea.classList.remove('hidden');
      formArea.classList.add('hidden');
      document.querySelectorAll('.category-btn').forEach(b => b.classList.remove('active'));
      this.selectedCategory = null;
    } else {
      adminArea.classList.add('hidden');
    }
  },

  onDistrictChange() {
    const districtId = document.getElementById('f-district').value;
    if (!districtId) return;
    const collegeSel = document.getElementById('f-college');
    if (collegeSel && window.AP_COLLEGES) {
      collegeSel.innerHTML = '<option value="">Select College</option>';
      (window.AP_COLLEGES[districtId] || []).forEach(c => {
        const opt = document.createElement('option');
        opt.value = c;
        opt.textContent = c;
        collegeSel.appendChild(opt);
      });
    }
    const placeTypeSel = document.getElementById('f-place-type');
    if (placeTypeSel) placeTypeSel.value = '';
    const placeSel = document.getElementById('f-place');
    if (placeSel) placeSel.innerHTML = '<option value="">Select Place</option>';
  },

  onPlaceTypeChange() {
    const districtId = document.getElementById('f-district').value;
    const placeType = document.getElementById('f-place-type').value;
    const placeSel = document.getElementById('f-place');
    if (!placeSel || !districtId || !placeType) return;
    placeSel.innerHTML = '<option value="">Select Place</option>';
    const places = (window.AP_GOV_PLACES[districtId] || {})[placeType] || [];
    places.forEach(p => {
      const opt = document.createElement('option');
      opt.value = p;
      opt.textContent = p;
      placeSel.appendChild(opt);
    });
  },

  // Staff login: Admin uses ADMIN2024; Volunteers use code issued by Admin
  doAdminLogin() {
    const name = document.getElementById('f-admin-name').value.trim();
    const code = document.getElementById('f-admin-code').value.trim().toUpperCase();

    if (!name) { Helpers.toast('Please enter your name', 'error'); return; }
    if (!code) { Helpers.toast('Please enter your access code', 'error'); return; }

    // Admin master code check
    if (code === 'ADMIN2024' || code === 'ADMIN246') {
      const user = {
        name, age: '', language: 'English',
        districtId: '', districtName: 'Andhra Pradesh',
        category: 'admin', role: 'admin',
        loginTime: new Date().toISOString()
      };
      Helpers.setUser(user);
      Helpers.toast('Welcome, ' + name + '! Logged in as Admin', 'success');
      App.navigate('admin');
      return;
    }

    // Volunteer code check - must be created by Admin
    const volunteers = JSON.parse(localStorage.getItem('dss_volunteers') || '[]');
    let vol = volunteers.find(function(v) { return v.code === code && v.active; });
    if (!vol && code === 'VOLUNTEER246') {
      vol = {
        id: 'master_volunteer',
        name: name,
        districtId: 'guntur',
        districtName: 'Guntur',
        role: 'volunteer',
        code: 'VOLUNTEER246',
        active: true
      };
    }
    if (vol) {
      const district = window.AP_DISTRICTS.find(function(d) { return d.id === vol.districtId; });
      const user = {
        name, age: '', language: 'English',
        districtId: vol.districtId || '',
        districtName: district ? district.name : (vol.districtName || 'Andhra Pradesh'),
        category: 'volunteer', role: 'volunteer',
        volunteerProfile: vol,
        loginTime: new Date().toISOString()
      };
      Helpers.setUser(user);
      Helpers.toast('Welcome, ' + name + '! Logged in as Volunteer', 'success');
      App.navigate('admin');
      return;
    }

    Helpers.toast('Invalid access code. Contact your Admin for credentials.', 'error');
  },

  // Regular student/citizen login
  doLogin() {
    const name = document.getElementById('f-name').value.trim();
    const age = document.getElementById('f-age').value;
    const lang = document.getElementById('f-lang').value;
    const districtId = document.getElementById('f-district').value;
    const cat = this.selectedCategory;

    if (!cat) { Helpers.toast('Please select Student or Citizen', 'error'); return; }
    if (!name) { Helpers.toast('Please enter your name', 'error'); return; }
    if (!age) { Helpers.toast('Please select your age group', 'error'); return; }
    if (!districtId) { Helpers.toast('Please select your district', 'error'); return; }

    const district = window.AP_DISTRICTS.find(function(d) { return d.id === districtId; });
    var extraFields = {};

    if (cat === 'student') {
      const college = document.getElementById('f-college').value;
      if (!college) { Helpers.toast('Please select your college', 'error'); return; }
      extraFields.college = college;
    } else if (cat === 'citizen') {
      const placeType = document.getElementById('f-place-type').value;
      const place = document.getElementById('f-place').value;
      if (!placeType || !place) { Helpers.toast('Please select your nearby government place', 'error'); return; }
      extraFields.placeType = placeType;
      extraFields.place = place;
    }

    const user = Object.assign({
      name: name,
      age: age,
      language: lang || 'English',
      districtId: districtId,
      districtName: district ? district.name : districtId,
      category: cat,
      role: cat,
      loginTime: new Date().toISOString()
    }, extraFields);

    Helpers.setUser(user);
    Helpers.toast('Welcome, ' + name + '!', 'success');
    App.navigate('dashboard');
  }
};

window.LoginPage = LoginPage;
