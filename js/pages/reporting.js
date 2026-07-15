// Reporting Guidance Assistant
const ReportingPage = {
  render() {
    return `
      <div class="reporting-page">
        <div class="page-header">
          <h1>📋 Fraud Reporting Guide</h1>
          <p>Step-by-step guidance to report cyber fraud effectively and maximize your chances of fund recovery.</p>
        </div>

        <div class="alert alert-danger" style="margin-bottom:20px;">
          🚨 <strong>Act within the first hour!</strong> The faster you report, the higher the chance of freezing the fraudster's account and recovering your money.
        </div>

        <div class="step-accordion" id="reporting-steps">
          ${this.steps().map((step, i) => this.stepItem(step, i)).join('')}
        </div>

        <!-- Evidence Checklist -->
        <div style="margin-top:24px;">
          <h2 class="section-title">📦 Evidence to Preserve</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(220px, 1fr)); gap:12px;">
            ${[
              ['📱', 'Screenshots', 'Screenshot all fraud messages, calls, and transaction alerts'],
              ['💳', 'Transaction IDs', 'Note exact date, time, amount, UPI transaction ID / bank reference'],
              ['📞', 'Caller Numbers', 'Save unknown caller numbers (do not delete call history)'],
              ['🔗', 'Links / URLs', 'Copy the exact URL of any phishing site visited'],
              ['📧', 'Emails', 'Do not delete fraud emails — forward to cybercrime@gov.in'],
              ['🏦', 'Bank Statements', 'Download transaction history showing the fraudulent transaction'],
              ['💬', 'Chat Logs', 'Export WhatsApp/Telegram conversation with fraudster'],
              ['📝', 'Notes', 'Write down everything while memory is fresh — time, what was said, what you did']
            ].map(([icon, title, desc]) => `
              <div style="display:flex; align-items:flex-start; gap:12px; padding:14px; background:var(--glass); border:1px solid var(--glass-border); border-radius:12px;">
                <span style="font-size:1.6rem;">${icon}</span>
                <div>
                  <div style="font-weight:700; font-size:0.85rem; margin-bottom:3px;">${title}</div>
                  <div style="font-size:0.75rem; color:var(--text-muted); line-height:1.4;">${desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>

        <!-- Quick Contact Cards -->
        <div style="margin-top:24px;">
          <h2 class="section-title">📞 Quick Contacts</h2>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:12px;">
            ${[
              ['📞 1930', 'Cyber Crime Helpline', '24×7, All India', 'tel:1930', '#ef4444'],
              ['🌐 cybercrime.gov.in', 'Online Complaint Portal', 'National Cyber Crime Reporting', 'https://cybercrime.gov.in', '#3b82f6'],
              ['📞 100', 'Police Emergency', 'Local Police Station', 'tel:100', '#f59e0b'],
              ['📞 112', 'National Emergency', 'Police / Fire / Ambulance', 'tel:112', '#8b5cf6'],
              ['🏦 Bank Helpline', 'RBI Banking Ombudsman', 'cms.rbi.org.in / 14448', 'https://cms.rbi.org.in', '#10b981'],
              ['📞 1915', 'Consumer Helpline', 'For job/product fraud complaints', 'tel:1915', '#ec4899']
            ].map(([title, subtitle, desc, href, color]) => `
              <a href="${href}" target="${href.startsWith('tel') ? '_self' : '_blank'}" style="text-decoration:none;">
                <div style="background:var(--glass); border:1px solid ${color}40; border-radius:14px; padding:16px; transition:all var(--transition); cursor:pointer;" onmouseover="this.style.borderColor='${color}'; this.style.transform='translateY(-3px)';" onmouseout="this.style.borderColor='${color}40'; this.style.transform='translateY(0)';">
                  <div style="font-weight:800; font-size:0.88rem; color:${color}; margin-bottom:4px;">${title}</div>
                  <div style="font-weight:600; font-size:0.78rem; margin-bottom:3px;">${subtitle}</div>
                  <div style="font-size:0.7rem; color:var(--text-muted);">${desc}</div>
                </div>
              </a>
            `).join('')}
          </div>
        </div>
      </div>
    `;
  },

  steps() {
    return [
      {
        icon: '📞', number: '1', title: 'STEP 1: Call 1930 Immediately',
        urgency: 'CRITICAL — Do this within the first hour',
        content: `
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
            1930 is the National Cyber Crime Helpline. Calling immediately activates a financial fraud freeze mechanism that can stop the fraudster from withdrawing your money.
          </p>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary);">
            <div>✅ Available 24 hours, 7 days a week</div>
            <div>✅ Operates in Hindi, English, and regional languages</div>
            <div>✅ Can coordinate with banks to freeze destination accounts</div>
            <div>✅ You will receive a complaint number — save it for reference</div>
            <div>📋 Tell them: Date/time of fraud, amount lost, mode (UPI/Net Banking/Card), transaction reference number</div>
          </div>
          <a href="tel:1930" class="btn btn-danger" style="margin-top:16px; display:inline-flex;">📞 Call 1930 Now</a>
        `
      },
      {
        icon: '🌐', number: '2', title: 'STEP 2: File Complaint at cybercrime.gov.in',
        urgency: 'Within 24 hours of fraud',
        content: `
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
            The National Cyber Crime Reporting Portal is the official government platform for online fraud complaints. This creates an official record and triggers investigation.
          </p>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary); margin-bottom:16px;">
            <div>1️⃣ Go to: <strong style="color:var(--blue-pale);">cybercrime.gov.in</strong></div>
            <div>2️⃣ Click "File a Complaint" → "Report Financial Fraud"</div>
            <div>3️⃣ Select: Financial Fraud → UPI Fraud / Net Banking Fraud / Debit Card Fraud</div>
            <div>4️⃣ Enter: Your details, bank details, fraudster's UPI/account, transaction ID</div>
            <div>5️⃣ Upload: Screenshots, transaction receipts</div>
            <div>6️⃣ Save the complaint acknowledgment number</div>
          </div>
          <a href="https://cybercrime.gov.in" target="_blank" class="btn btn-primary btn-sm">🌐 Go to Portal</a>
        `
      },
      {
        icon: '🏦', number: '3', title: 'STEP 3: Contact Your Bank Immediately',
        urgency: 'Within 24 hours — call 24x7 fraud helpline',
        content: `
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
            Your bank can raise a dispute, initiate chargeback, and may be able to reverse the transaction if reported within the stipulated time.
          </p>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px;">
            <div>📞 Call your bank's 24×7 fraud/toll-free helpline (printed on back of your card)</div>
            <div>🔐 Request immediate block on: Card / Net Banking / UPI</div>
            <div>📝 Ask bank to raise a formal chargeback / fraud dispute in writing</div>
            <div>🏦 Visit branch within 3 working days to submit written complaint</div>
            <div>⏰ RBI Regulation: If reported within 3 days, bank liability is limited for unauthorized transactions</div>
          </div>
          <div style="font-size:0.78rem; color:var(--saffron); background:rgba(245,158,11,0.1); border:1px solid rgba(245,158,11,0.3); border-radius:8px; padding:10px;">
            💡 <strong>Key banks:</strong> SBI: 1800-11-2211 | HDFC: 1800-202-6161 | ICICI: 1800-200-3344 | Axis: 1800-209-5577 | Other: See back of card
          </div>
        `
      },
      {
        icon: '🗂️', number: '4', title: 'STEP 4: Preserve All Evidence',
        urgency: 'Do this before clearing messages or calls',
        content: `
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
            Evidence is crucial for investigation and recovery. Do NOT delete any messages, calls, or apps related to the fraud.
          </p>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary);">
            <div>📱 Screenshot: All fraud messages, WhatsApp chats, email threads</div>
            <div>💳 Note down: Transaction ID, date, time, amount, sender UPI ID / bank account</div>
            <div>📞 Save the fraudster's phone numbers from call history</div>
            <div>🌐 Copy the full URL of any phishing website you visited</div>
            <div>📧 Export WhatsApp conversation (Settings > Chat > Export Chat)</div>
            <div>🏦 Download bank statement from net banking showing the transaction</div>
            <div>📝 Write a brief narration: what happened, when, in what sequence</div>
          </div>
        `
      },
      {
        icon: '🚔', number: '5', title: 'STEP 5: File FIR at Police Station',
        urgency: 'Within 3 days of the incident',
        content: `
          <p style="font-size:0.88rem; color:var(--text-secondary); margin-bottom:14px;">
            For larger amounts or in absence of resolution, file an FIR (First Information Report) at your nearest police station. Cyber Crime police stations are equipped to handle digital fraud cases.
          </p>
          <div style="display:flex; flex-direction:column; gap:8px; font-size:0.85rem; color:var(--text-secondary); margin-bottom:14px;">
            <div>1️⃣ Visit nearest police station or Cyber Crime police station</div>
            <div>2️⃣ Bring: Printed evidence (screenshots, bank statements), government ID</div>
            <div>3️⃣ Request FIR under: Section 420 IPC (cheating) and IT Act Sections 66C/66D</div>
            <div>4️⃣ If police refuses to file FIR: Approach Superintendent of Police or Magistrate</div>
            <div>5️⃣ You can also file e-FIR online in Andhra Pradesh at: appolice.gov.in</div>
          </div>
          <a href="https://www.appolice.gov.in" target="_blank" class="btn btn-secondary btn-sm">🌐 AP Police Portal</a>
        `
      }
    ];
  },

  stepItem(step, index) {
    return `
      <div class="step-item" id="step-${index}">
        <div class="step-header" onclick="ReportingPage.toggleStep(${index})">
          <div class="step-number">${step.number}</div>
          <div class="step-title">${step.icon} ${step.title}</div>
          <div style="font-size:0.68rem; color:var(--crimson-light); font-weight:600; margin-right:8px;">${step.urgency}</div>
          <div class="step-toggle">▼</div>
        </div>
        <div class="step-content">
          <div class="step-content-inner">${step.content}</div>
        </div>
      </div>
    `;
  },

  toggleStep(index) {
    const el = document.getElementById(`step-${index}`);
    const isOpen = el.classList.contains('open');
    // Close all
    document.querySelectorAll('.step-item').forEach(s => s.classList.remove('open'));
    if (!isOpen) el.classList.add('open');
  },

  init() {
    // Open first step by default
    setTimeout(() => {
      const first = document.getElementById('step-0');
      if (first) first.classList.add('open');
    }, 100);
  }
};

window.ReportingPage = ReportingPage;
