// Offline Awareness Kit Page
const OfflineKitPage = {
  render() {
    return `
      <div class="offline-kit-page">
        <div class="page-header">
          <h1>📥 Offline Awareness Kit</h1>
          <p>Download posters, checklists, and trainer materials for offline sessions in low-connectivity areas.</p>
        </div>

        <div class="alert alert-info" style="margin-bottom:20px;">
          💡 These resources are designed for <strong>offline use</strong>. Print and distribute them in villages, panchayat offices, CSCs, and schools to spread cyber safety awareness.
        </div>

        <h2 class="section-title">🖼️ Awareness Posters</h2>
        <div class="kit-grid" style="margin-bottom:28px;">
          ${[
            { icon: '💸', title: 'UPI Safety Poster', desc: 'Visual guide: What is safe vs unsafe in UPI payments. Telugu and English.', file: 'upi_safety_poster' },
            { icon: '🔐', title: 'OTP Safety Poster', desc: '"Never share OTP" visual campaign poster for display in public places.', file: 'otp_safety_poster' },
            { icon: '🚫', title: 'Digital Arrest Awareness', desc: 'Explains digital arrest scam in simple visuals. Print for panchayat boards.', file: 'digital_arrest_poster' },
            { icon: '📞', title: '1930 Helpline Poster', desc: 'Large format poster: How and when to call 1930. Available in Telugu.', file: 'helpline_1930_poster' },
            { icon: '🎣', title: 'Phishing Warning Poster', desc: 'Visual comparison: Real bank SMS vs Phishing SMS. Print for bank branches.', file: 'phishing_poster' },
            { icon: '💰', title: 'Loan App Warning', desc: 'Warning signs of illegal loan apps. Ideal for display at CSC centres.', file: 'loan_app_poster' }
          ].map(kit => this.kitCard(kit, 'poster')).join('')}
        </div>

        <h2 class="section-title">📋 Safety Checklists</h2>
        <div class="kit-grid" style="margin-bottom:28px;">
          ${[
            { icon: '📱', title: 'Phone Safety Checklist', desc: 'A 10-point checklist to secure your smartphone. Give to first-time smartphone users.', file: 'phone_safety_checklist' },
            { icon: '🏦', title: 'Bank Account Safety', desc: 'How to protect bank accounts and cards. Ideal for bank branch distribution.', file: 'bank_safety_checklist' },
            { icon: '👴', title: 'Senior Citizen Safety', desc: 'Simple Telugu-language guide for elders on avoiding common scams.', file: 'senior_checklist' },
            { icon: '👩‍🌾', title: 'Farmer Safety Guide', desc: 'Checklist for farmers: PM Kisan portal fraud, crop insurance fraud prevention.', file: 'farmer_checklist' }
          ].map(kit => this.kitCard(kit, 'checklist')).join('')}
        </div>

        <h2 class="section-title">🏫 Trainer Materials</h2>
        <div class="kit-grid" style="margin-bottom:28px;">
          ${[
            { icon: '📖', title: 'Session Plan: Cyber Crime', desc: '2-hour session plan with activities, discussion points, and quiz questions.', file: 'session_plan_cyber' },
            { icon: '📖', title: 'Session Plan: Financial Safety', desc: '1.5-hour session plan for financial literacy workshops in villages.', file: 'session_plan_financial' },
            { icon: '🎭', title: 'Role Play Scripts', desc: 'Telugu-language role-play scripts simulating UPI fraud and digital arrest scenarios.', file: 'role_play_scripts' },
            { icon: '📝', title: 'Attendance Sheet', desc: 'Printable attendance sheet for volunteers to record session participants.', file: 'attendance_sheet' },
            { icon: '📊', title: 'Quiz Sheets (Print)', desc: '20-question printed quiz on cyber safety for offline classroom use.', file: 'quiz_sheets' },
            { icon: '🗓️', title: 'Campaign Calendar', desc: 'Monthly awareness campaign calendar template for district-level planning.', file: 'campaign_calendar' }
          ].map(kit => this.kitCard(kit, 'trainer')).join('')}
        </div>

        <!-- Download All -->
        <div style="text-align:center; padding:32px; background:var(--glass); border:1px solid var(--glass-border); border-radius:var(--radius-xl); margin-top:8px;">
          <div style="font-size:3rem; margin-bottom:12px;">📦</div>
          <h3 style="font-family:var(--font-heading); font-size:1.1rem; font-weight:700; margin-bottom:8px;">Download Complete Kit</h3>
          <p style="color:var(--text-muted); font-size:0.85rem; margin-bottom:20px;">Get all posters, checklists, and trainer materials in one ZIP file.</p>
          <button class="btn btn-primary btn-lg" onclick="OfflineKitPage.downloadAll()">
            📥 Download Complete Kit (ZIP)
          </button>
        </div>
      </div>
    `;
  },

  kitCard(kit, type) {
    return `
      <div class="kit-card">
        <span class="kit-icon">${kit.icon}</span>
        <div class="kit-title">${kit.title}</div>
        <p class="kit-desc">${kit.desc}</p>
        <div style="display:flex; gap:8px; flex-wrap:wrap;">
          <button class="btn btn-secondary btn-sm" onclick="OfflineKitPage.download('${kit.file}', '${type}')">
            📥 Download PDF
          </button>
          <button class="btn btn-secondary btn-sm" onclick="OfflineKitPage.preview('${kit.file}', '${kit.title}')">
            👁️ Preview
          </button>
        </div>
      </div>
    `;
  },

  download(file, type) {
    // Generate a placeholder PDF using jsPDF
    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'portrait', unit: 'mm', format: 'a4' });

      doc.setFillColor(10, 22, 40);
      doc.rect(0, 0, 210, 297, 'F');

      doc.setTextColor(245, 158, 11);
      doc.setFontSize(18);
      doc.setFont('helvetica', 'bold');
      doc.text('Secure Future', 105, 30, { align: 'center' });

      doc.setTextColor(255, 255, 255);
      doc.setFontSize(14);
      doc.text('Andhra Pradesh Cyber Safety Initiative', 105, 42, { align: 'center' });

      doc.setDrawColor(245, 158, 11);
      doc.setLineWidth(0.5);
      doc.line(20, 50, 190, 50);

      doc.setFontSize(24);
      doc.setTextColor(245, 158, 11);
      doc.text(file.replace(/_/g, ' ').toUpperCase(), 105, 80, { align: 'center', maxWidth: 160 });

      doc.setFontSize(11);
      doc.setTextColor(150, 175, 200);
      doc.text([
        'This document is part of the Secure Future Offline Awareness Kit.',
        '',
        'Intended for distribution in:',
        '• Gram Panchayat offices',
        '• Common Service Centres (CSCs)',
        '• Schools and Colleges',
        '• Bank Branches',
        '• Police Stations',
        '',
        'For cyber fraud emergencies:',
        'Call: 1930 (24x7 Helpline)',
        'File: cybercrime.gov.in',
        '',
        'Andhra Pradesh Cyber Crime Unit | AP Police'
      ], 30, 110, { lineHeightFactor: 1.6 });

      doc.setTextColor(70, 90, 110);
      doc.setFontSize(9);
      doc.text('Secure Future | Government of Andhra Pradesh | cybercrime.gov.in | 1930', 105, 280, { align: 'center' });

      doc.save(`DSS_${file}.pdf`);
      Helpers.toast('✅ Document downloaded!', 'success');
    } catch(e) {
      Helpers.toast('Please allow the page to fully load, then try again.', 'warning');
    }
  },

  preview(file, title) {
    Helpers.toast(`Preview for "${title}" — In production, this would show a full preview modal.`, 'info');
  },

  downloadAll() {
    Helpers.toast('In a full deployment, this would download a ZIP of all materials. For now, please download items individually.', 'info');
  },

  init() {}
};

window.OfflineKitPage = OfflineKitPage;
