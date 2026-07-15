// Scam Checker Page Module
const ScamCheckerPage = {
  render() {
    return `
      <div class="scam-checker-page">
        <div class="page-header">
          <h1>🔍 Scam Message & Link Checker</h1>
          <p>Paste any suspicious SMS, WhatsApp message, email, or link to check its risk level.</p>
        </div>

        <div class="card-glass" style="margin-bottom:20px;">
          <label class="form-label" style="margin-bottom:8px; display:block;">📋 Paste Suspicious Content Here</label>
          <textarea id="scam-input" class="form-textarea" style="min-height:140px;"
            placeholder="Paste the suspicious SMS, WhatsApp message, email text, or a suspicious link/URL here...

Examples:
• 'Your SBI account will be blocked. Update KYC at: http://sbi-kyc.xyz'
• 'Congratulations! You won ₹50,000 in Facebook lottery. Call 9876543210'
• 'Digital arrest notice: Your Aadhaar is linked to drug trafficking. Call immediately.'
• Any suspicious link like: http://bank-update-kyc.com/login"></textarea>
          <div style="display:flex; gap:12px; margin-top:12px; flex-wrap:wrap;">
            <button class="btn btn-primary btn-lg" onclick="ScamCheckerPage.check()">
              🔍 Check Now
            </button>
            <button class="btn btn-secondary" onclick="ScamCheckerPage.clearInput()">
              🗑️ Clear
            </button>
          </div>
        </div>

        <!-- Example Buttons -->
        <div style="margin-bottom:20px;">
          <p style="font-size:0.78rem; color:var(--text-muted); margin-bottom:10px;">🔬 Try these examples:</p>
          <div style="display:flex; flex-wrap:wrap; gap:8px;">
            <button class="quick-prompt-btn" onclick="ScamCheckerPage.loadExample(0)">Example: KYC SMS</button>
            <button class="quick-prompt-btn" onclick="ScamCheckerPage.loadExample(1)">Example: Lottery Win</button>
            <button class="quick-prompt-btn" onclick="ScamCheckerPage.loadExample(2)">Example: Digital Arrest</button>
            <button class="quick-prompt-btn" onclick="ScamCheckerPage.loadExample(3)">Example: Loan App</button>
            <button class="quick-prompt-btn" onclick="ScamCheckerPage.loadExample(4)">Example: Safe Message</button>
          </div>
        </div>

        <div id="scam-result"></div>

        <!-- How it works -->
        <div class="card" style="margin-top:24px;">
          <h3 style="font-family:var(--font-heading); font-size:0.95rem; font-weight:700; margin-bottom:12px;">ℹ️ How the Checker Works</h3>
          <div style="display:grid; grid-template-columns:repeat(auto-fill, minmax(200px, 1fr)); gap:12px;">
            ${[
              ['🟢', 'Safe', 'No suspicious patterns detected.'],
              ['🟡', 'Suspicious', 'One or more mild warning signs found.'],
              ['🔴', 'High Risk', 'Multiple fraud indicators detected.'],
              ['🚨', 'Critical', 'Classic fraud script with immediate danger.']
            ].map(([icon, level, desc]) => `
              <div style="display:flex; align-items:flex-start; gap:10px; padding:10px; background:var(--glass); border-radius:10px; border:1px solid var(--glass-border);">
                <span style="font-size:1.2rem;">${icon}</span>
                <div>
                  <div style="font-weight:700; font-size:0.82rem;">${level}</div>
                  <div style="font-size:0.73rem; color:var(--text-muted);">${desc}</div>
                </div>
              </div>
            `).join('')}
          </div>
          <p style="font-size:0.75rem; color:var(--text-muted); margin-top:12px;">⚠️ This checker uses pattern matching and is not 100% accurate. Always use good judgment and report to 1930 if in doubt.</p>
        </div>
      </div>
    `;
  },

  examples: [
    "Dear Customer, your SBI account KYC is expired. Update immediately at http://sbi-kyc-update.xyz/login or your account will be blocked within 24 hours. Call 9876543210.",
    "Congratulations! You have WON ₹50,000 in the Facebook Annual Lucky Draw 2024. To claim your prize, send your Name, Bank Account Number, IFSC and Aadhaar to claim@fbprize.net",
    "URGENT NOTICE: CBI Digital Arrest. Your Aadhaar 9876-1234-5678 has been used in illegal drug trafficking. You are under digital arrest. Stay on WhatsApp video call immediately or face 3 years imprisonment. Officer Rajesh Kumar: +91-9900000000",
    "Instant Loan ₹50,000 approved! No CIBIL check. Download our app from this link: http://fastloan-apk.com/download.apk. Repay in 7 days at low interest.",
    "SBI: Your account ending 7890 has been credited with ₹15,000 on 14-Jul-2026. For queries, contact 1800-11-2211 or visit sbi.co.in"
  ],

  rules: [
    // Critical rules
    { pattern: /digital arrest|cyber arrest|you are under arrest.*video|cbi.*video.*call|ed.*digital.*arrest|narcotics.*arrest.*call/i, level: 'critical', flag: '🚫 Digital Arrest Scam', explanation: 'This is a CLASSIC DIGITAL ARREST SCAM. No legitimate law enforcement agency (CBI, ED, Police, Courts) conducts digital arrests via WhatsApp or any video call. HANG UP IMMEDIATELY and inform your family.' },
    { pattern: /account.*will be blocked.*click|click.*kyc.*blocked|kyc.*expire.*link|update.*kyc.*http/i, level: 'critical', flag: '🎣 Phishing KYC Scam', explanation: 'This is a phishing attempt mimicking a bank. Banks update KYC only in-branch or through verified apps — NEVER via SMS links. Do NOT click any link.' },
    { pattern: /won.*prize.*bank|lottery.*won.*account|lucky draw.*send.*details|claim.*prize.*account number/i, level: 'critical', flag: '🏆 Lottery/Prize Scam', explanation: 'No legitimate lottery notifies winners via SMS/WhatsApp. This is fraud designed to steal your banking details. Ignore and delete immediately.' },
    // High risk
    { pattern: /apk|download.*app.*http|install.*from.*link/i, level: 'high', flag: '📲 Malicious APK Link', explanation: 'A link asking you to download an APK file from outside the Play Store. APK files from unknown sources often contain malware or banking trojans.' },
    { pattern: /otp.*share|share.*otp|give.*otp|tell.*otp|verify.*otp.*call/i, level: 'high', flag: '🔐 OTP Request', explanation: 'Any message or call asking you to share an OTP is fraud. Banks, government, and telecom companies NEVER ask for OTP.' },
    { pattern: /send.*bank account|send.*ifsc|share.*account number|send.*cvv|share.*debit card/i, level: 'high', flag: '🏦 Banking Details Requested', explanation: 'Asking for bank account number, IFSC, or card details via message is always a scam. Never share these details.' },
    { pattern: /anydesk|teamviewer|airdroid|remote.*access|screen.*share.*now/i, level: 'high', flag: '🖥️ Remote Access App', explanation: 'Being asked to install AnyDesk or TeamViewer means the fraudster wants to control your phone remotely and access your banking apps.' },
    { pattern: /instant loan.*no document|loan.*approved.*download|fast loan.*apk/i, level: 'high', flag: '💰 Illegal Loan App', explanation: 'Instant loan offers with no documents and APK download links are classic illegal loan app fraud. These apps steal your contacts and blackmail borrowers.' },
    { pattern: /aadhaar.*linked.*case|aadhaar.*money laundering|sim.*illegal.*activity|mobile.*illegal/i, level: 'high', flag: '🆔 Fake Legal Threat', explanation: 'Threatening messages linking your Aadhaar/phone to illegal activity are a manipulation tactic to extract money or personal details.' },
    // Suspicious
    { pattern: /\b(click here|click now|tap here|press here)\b.*(win|claim|verify|update|reward)/i, level: 'suspicious', flag: '🖱️ Urgent Click Request', explanation: 'Urgent calls to action combined with promises of rewards or threats are classic phishing tactics.' },
    { pattern: /congratulations|you have won|you are selected|special offer.*today only|limited.*offer.*expire/i, level: 'suspicious', flag: '🎁 Unsolicited Prize/Offer', explanation: 'Unsolicited prize or offer messages are often the first step of a fraud. Be cautious before taking any action.' },
    { pattern: /call.*immediately|call.*urgently|call.*now|urgent.*call.*number/i, level: 'suspicious', flag: '📞 Urgency Tactic', explanation: 'Creating urgency is a manipulation tactic used by fraudsters. Verify independently before calling any number in a message.' },
    { pattern: /[a-z0-9.-]+-[a-z]{3,}\.(?:xyz|top|info|click|tk|ml|ga|cf|gq)/i, level: 'suspicious', flag: '🌐 Suspicious Domain', explanation: 'The URL uses a suspicious top-level domain (.xyz, .top, .tk etc.) that are commonly used for phishing and scam websites.' },
    { pattern: /http:\/\/(?!www\.gov\.in|www\.sbi\.co\.in|www\.rbi\.org\.in)/i, level: 'suspicious', flag: '🔒 Insecure URL (HTTP)', explanation: 'The link uses HTTP instead of HTTPS. For banking and government sites, always ensure the URL starts with https://.' },
    { pattern: /re.*apply.*fee|registration.*fee|security.*deposit.*job|advance.*payment.*job/i, level: 'suspicious', flag: '💼 Job Fee Scam Indicator', explanation: 'Legitimate employers never ask for registration fees or security deposits. This indicates a fake job offer scam.' },
  ],

  check() {
    const input = document.getElementById('scam-input')?.value?.trim();
    if (!input) { Helpers.toast('Please paste some text to check.', 'warning'); return; }

    let level = 'safe';
    const flags = [];
    let explanation = '';
    let matchedRule = null;

    for (const rule of this.rules) {
      if (rule.pattern.test(input)) {
        flags.push({ text: rule.flag, severity: rule.level });
        if (!matchedRule || this.levelPriority(rule.level) > this.levelPriority(matchedRule.level)) {
          matchedRule = rule;
          level = rule.level;
        }
      }
    }

    if (!matchedRule) {
      level = 'safe';
      explanation = 'No obvious scam patterns were detected in this message. However, always be cautious — new scam formats emerge regularly. If something feels wrong, trust your instinct and verify independently.';
    } else {
      explanation = matchedRule.explanation;
    }

    Helpers.markScamCheck();
    document.getElementById('scam-result').innerHTML = this.renderResult(level, flags, explanation, input);
    document.getElementById('scam-result').scrollIntoView({ behavior: 'smooth', block: 'start' });
  },

  levelPriority(l) { return { safe: 0, suspicious: 1, high: 2, critical: 3 }[l] || 0; },

  renderResult(level, flags, explanation, input) {
    const levels = {
      safe: { label: '🟢 SAFE', class: 'risk-safe', icon: '✅', advice: 'This message appears safe. Continue with normal caution.' },
      suspicious: { label: '🟡 SUSPICIOUS', class: 'risk-suspicious', icon: '⚠️', advice: 'Be cautious. Verify before taking any action. Do NOT click links or call numbers without verification.' },
      high: { label: '🔴 HIGH RISK', class: 'risk-high', icon: '🚨', advice: 'This message shows multiple fraud indicators. DO NOT click links, share details, or call numbers. Report to 1930.' },
      critical: { label: '🚨 CRITICAL — ACTIVE FRAUD', class: 'risk-critical', icon: '🆘', advice: 'This is a well-known fraud script. Immediately block the sender. If you already responded, call 1930 NOW.' }
    };
    const info = levels[level] || levels.safe;

    return `
      <div class="risk-result ${info.class}">
        <div style="font-size:2.5rem; margin-bottom:8px;">${info.icon}</div>
        <div class="risk-level">${info.label}</div>
        <p class="risk-explanation" style="margin-bottom:12px;">${explanation}</p>
        ${flags.length > 0 ? `
          <div class="risk-flags">
            ${flags.map(f => `<span class="risk-flag ${f.severity === 'critical' || f.severity === 'high' ? 'flag-red' : 'flag-orange'}">${f.text}</span>`).join('')}
          </div>
        ` : ''}
        <div style="margin-top:16px; padding:14px; background:rgba(0,0,0,0.2); border-radius:10px;">
          <p style="font-size:0.82rem; font-weight:700; color:var(--text-primary); margin-bottom:6px;">💡 What to do:</p>
          <p style="font-size:0.82rem; color:var(--text-secondary);">${info.advice}</p>
        </div>
        ${level !== 'safe' ? `
          <div style="display:flex; gap:10px; margin-top:16px; flex-wrap:wrap;">
            <a href="tel:1930" class="btn btn-danger btn-sm">📞 Call 1930</a>
            <a href="https://cybercrime.gov.in" target="_blank" class="btn btn-secondary btn-sm">🌐 Report at cybercrime.gov.in</a>
          </div>
        ` : ''}
      </div>
    `;
  },

  loadExample(i) {
    const inp = document.getElementById('scam-input');
    if (inp) { inp.value = this.examples[i]; }
    document.getElementById('scam-result').innerHTML = '';
  },

  clearInput() {
    const inp = document.getElementById('scam-input');
    if (inp) inp.value = '';
    document.getElementById('scam-result').innerHTML = '';
  },

  init() {}
};

window.ScamCheckerPage = ScamCheckerPage;
