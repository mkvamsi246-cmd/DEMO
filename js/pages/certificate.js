// Certificate Page — Students Only
const CertificatePage = {
  render() {
    const user = Helpers.getUser();
    if (!user) return '<p>Not logged in.</p>';

    if (user.category !== 'student') {
      return `
        <div class="certificate-page">
          <div class="page-header">
            <h1>🎓 Certificate</h1>
          </div>
          <div class="alert alert-warning">
            🏫 Certificates are available for <strong>Student</strong> users only. Citizens earn <strong>Points & Badges</strong> instead — check the <a href="#rewards" style="color:var(--saffron);">Rewards</a> section!
          </div>
        </div>
      `;
    }

    const eligible = Helpers.isCertificateEligible();
    const p = Helpers.getProgress();
    const completed = (p.completedLessons || []).length;
    const quizPassed = Object.values(p.quizResults || {}).filter(r => r.passed).length;
    const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });

    return `
      <div class="certificate-page">
        <div class="page-header">
          <h1>🎓 My Certificate</h1>
          <p>Complete the required modules and quizzes to earn your Secure Future certificate.</p>
        </div>

        <!-- Eligibility Progress -->
        <div class="card-glass" style="margin-bottom:24px;">
          <h3 style="font-family:var(--font-heading); font-weight:700; margin-bottom:16px;">📊 Certificate Requirements</h3>
          <div style="display:flex; flex-direction:column; gap:14px;">
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="font-size:0.85rem; color:var(--text-secondary);">Lessons Completed (min. 5 required)</span>
                <span style="font-size:0.85rem; font-weight:700; color:${completed >= 5 ? 'var(--emerald-light)' : 'var(--saffron)'};">${completed} / 5 ${completed >= 5 ? '✅' : ''}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width:${Math.min(100, (completed/5)*100)}%"></div>
              </div>
            </div>
            <div>
              <div style="display:flex; justify-content:space-between; margin-bottom:6px;">
                <span style="font-size:0.85rem; color:var(--text-secondary);">Quizzes Passed (min. 3 required)</span>
                <span style="font-size:0.85rem; font-weight:700; color:${quizPassed >= 3 ? 'var(--emerald-light)' : 'var(--saffron)'};">${quizPassed} / 3 ${quizPassed >= 3 ? '✅' : ''}</span>
              </div>
              <div class="progress-bar">
                <div class="progress-fill" style="width:${Math.min(100, (quizPassed/3)*100)}%; background: linear-gradient(90deg, var(--emerald), var(--blue));"></div>
              </div>
            </div>
          </div>
          ${!eligible ? `
            <div class="alert alert-info" style="margin-top:16px;">
              ℹ️ Complete ${Math.max(0, 5-completed)} more lesson(s) and pass ${Math.max(0, 3-quizPassed)} more quiz(zes) to unlock your certificate!
              <br><a href="#cyber" style="color:var(--blue-pale);">→ Start with Cyber Crime Hub</a>
            </div>
          ` : ''}
        </div>

        <!-- Certificate Preview -->
        ${eligible ? `
          <div class="certificate-preview" id="cert-preview">
            <div class="cert-seal">🛡️</div>
            <div class="cert-title">Certificate of Completion</div>
            <div style="font-size:0.75rem; color:rgba(245,158,11,0.7); letter-spacing:2px; margin-bottom:16px;">SECURE FUTURE — ANDHRA PRADESH</div>

            <p style="font-size:0.85rem; color:rgba(255,255,255,0.6); margin-bottom:8px;">This is to certify that</p>
            <div class="cert-name" id="cert-name-display">${user.name}</div>

            <p class="cert-body">
              has successfully completed the <strong>Secure Future Awareness Programme</strong>,
              demonstrating knowledge in Cyber Crime Prevention, Financial Literacy, and Digital Safety —
              as part of the Andhra Pradesh Cyber Safety Initiative.
            </p>

            <div class="cert-details">
              <div>
                <div class="cert-detail-label">District</div>
                <div class="cert-detail-value">${user.districtName}</div>
              </div>
              <div>
                <div class="cert-detail-label">Institution</div>
                <div class="cert-detail-value">${user.college ? user.college.split(',')[0] : 'N/A'}</div>
              </div>
              <div>
                <div class="cert-detail-label">Date</div>
                <div class="cert-detail-value">${today}</div>
              </div>
              <div>
                <div class="cert-detail-label">Lessons</div>
                <div class="cert-detail-value">${completed} Completed</div>
              </div>
            </div>

            <div style="margin-top:24px; padding-top:16px; border-top:1px solid rgba(245,158,11,0.3); display:flex; justify-content:space-around;">
              <div style="text-align:center;">
                <div style="font-size:1.4rem; margin-bottom:4px;">🏛️</div>
                <div style="font-size:0.65rem; color:rgba(255,255,255,0.4);">AP Cyber Crime Unit</div>
                <div style="font-size:0.6rem; color:rgba(245,158,11,0.6); letter-spacing:1px;">AUTHORIZED SEAL</div>
              </div>
              <div style="text-align:center;">
                <div style="font-size:1.4rem; margin-bottom:4px;">📋</div>
                <div style="font-size:0.65rem; color:rgba(255,255,255,0.4);">Cert ID: DSS-${Date.now().toString(36).toUpperCase()}</div>
                <div style="font-size:0.6rem; color:rgba(245,158,11,0.6); letter-spacing:1px;">VERIFICATION CODE</div>
              </div>
            </div>
          </div>

          <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-warning btn-lg" onclick="CertificatePage.downloadPDF()">
              📥 Download Certificate PDF
            </button>
            <button class="btn btn-secondary" onclick="CertificatePage.print()">
              🖨️ Print Certificate
            </button>
          </div>

          <div class="alert alert-success" style="margin-top:20px;">
            🎉 <strong>Congratulations, ${user.name}!</strong> Your certificate is ready. Share it with your college and help spread cyber safety awareness in your community!
          </div>
        ` : `
          <div style="text-align:center; padding:40px; background:var(--glass); border:1px solid var(--glass-border); border-radius:var(--radius-xl);">
            <div style="font-size:4rem; margin-bottom:16px;">🔒</div>
            <h3 style="font-family:var(--font-heading); font-size:1.2rem; font-weight:700; margin-bottom:8px;">Certificate Locked</h3>
            <p style="color:var(--text-muted); font-size:0.85rem;">Complete the requirements above to unlock your certificate.</p>
          </div>
        `}
      </div>
    `;
  },

  downloadPDF() {
    const user = Helpers.getUser();
    if (!user) return;

    if (typeof jspdf === 'undefined' && typeof window.jspdf === 'undefined') {
      Helpers.toast('PDF library loading... please try again in a moment.', 'warning');
      return;
    }

    try {
      const { jsPDF } = window.jspdf;
      const doc = new jsPDF({ orientation: 'landscape', unit: 'mm', format: 'a4' });

      const pageW = doc.internal.pageSize.getWidth();
      const pageH = doc.internal.pageSize.getHeight();

      // Background
      doc.setFillColor(10, 22, 40);
      doc.rect(0, 0, pageW, pageH, 'F');

      // Gold border
      doc.setDrawColor(245, 158, 11);
      doc.setLineWidth(3);
      doc.rect(8, 8, pageW - 16, pageH - 16);
      doc.setLineWidth(1);
      doc.rect(12, 12, pageW - 24, pageH - 24);

      // Title
      doc.setTextColor(245, 158, 11);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'bold');
      doc.text('SECURE FUTURE — ANDHRA PRADESH', pageW/2, 30, { align: 'center' });

      doc.setFontSize(22);
      doc.text('Certificate of Completion', pageW/2, 45, { align: 'center' });

      // Body
      doc.setTextColor(180, 200, 220);
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.text('This is to certify that', pageW/2, 62, { align: 'center' });

      // Name
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(28);
      doc.setFont('helvetica', 'bold');
      doc.text(user.name, pageW/2, 78, { align: 'center' });

      // Underline name
      doc.setDrawColor(245, 158, 11);
      doc.setLineWidth(0.5);
      const nameWidth = doc.getTextWidth(user.name);
      doc.line(pageW/2 - nameWidth/2, 80, pageW/2 + nameWidth/2, 80);

      // Description
      doc.setTextColor(150, 175, 200);
      doc.setFontSize(10);
      doc.setFont('helvetica', 'normal');
      const bodyText = 'has successfully completed the Secure Future Awareness Programme, demonstrating knowledge in';
      const bodyText2 = 'Cyber Crime Prevention, Financial Literacy, and Digital Safety — Andhra Pradesh Cyber Safety Initiative.';
      doc.text(bodyText, pageW/2, 92, { align: 'center' });
      doc.text(bodyText2, pageW/2, 99, { align: 'center' });

      // Details row
      const today = new Date().toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric' });
      const p = Helpers.getProgress();
      const completed = (p.completedLessons || []).length;

      doc.setDrawColor(50, 70, 100);
      doc.setLineWidth(0.5);
      doc.line(30, 112, pageW - 30, 112);

      const details = [
        ['District', user.districtName],
        ['Institution', user.college ? user.college.split(',')[0] : 'N/A'],
        ['Date', today],
        ['Lessons Completed', completed + '']
      ];

      const colW = (pageW - 60) / details.length;
      details.forEach((d, i) => {
        const x = 30 + (colW * i) + colW/2;
        doc.setTextColor(100, 130, 160);
        doc.setFontSize(8);
        doc.text(d[0].toUpperCase(), x, 120, { align: 'center' });
        doc.setTextColor(245, 158, 11);
        doc.setFontSize(11);
        doc.setFont('helvetica', 'bold');
        doc.text(d[1], x, 128, { align: 'center' });
        doc.setFont('helvetica', 'normal');
      });

      // Footer
      doc.setTextColor(60, 80, 100);
      doc.setFontSize(8);
      doc.text(`Cert ID: DSS-${Date.now().toString(36).toUpperCase()} | cybercrime.gov.in | 1930`, pageW/2, pageH - 18, { align: 'center' });

      doc.save(`DSS_Certificate_${user.name.replace(/\s+/g, '_')}.pdf`);
      Helpers.toast('✅ Certificate downloaded successfully!', 'success');
    } catch(e) {
      console.error(e);
      Helpers.toast('Failed to generate PDF. Please try the Print option instead.', 'error');
    }
  },

  print() {
    window.print();
  },

  init() {}
};

window.CertificatePage = CertificatePage;
