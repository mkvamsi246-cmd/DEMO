// Fraud Scenario Simulator
const SimulatorPage = {
  currentSim: null,
  currentStep: 0,
  choicesMade: [],

  scenarios: [
    {
      id: 'upi_qr_seller',
      title: 'The OLX Seller Trap',
      avatar: '🛍️',
      difficulty: 'Beginner',
      steps: [
        {
          context: 'You listed your old laptop for ₹15,000 on OLX. A buyer messages you: "I want to buy. Please share your QR code or UPI ID."',
          choices: [
            { text: 'Share my UPI ID (like phone@upi) for them to pay me.', outcome: 'safe' },
            { text: 'Scan their QR code to "receive" the payment they sent.', outcome: 'unsafe' },
            { text: 'Give them my net banking username and password.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Correct! Sharing your UPI ID is the right way. The buyer scans/enters your UPI ID and pays. You never need to scan anything to receive money.',
          unsafeOutcome: '❌ Dangerous! Scanning someone else\'s QR code always SENDS money FROM you. You would lose ₹15,000 instead of receiving it. The QR code was the fraud.'
        },
        {
          context: 'You shared your UPI ID. The buyer says "I\'ve sent ₹15,000. Please check and also enter your PIN to confirm receipt."',
          choices: [
            { text: 'Enter my UPI PIN to confirm receipt — I need the money.', outcome: 'unsafe' },
            { text: 'Check my bank directly. You never need PIN to RECEIVE money.', outcome: 'safe' },
            { text: 'Ask them to send a screenshot of the payment first.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Perfect! UPI PIN is only used to SEND money. You NEVER enter PIN to receive. Check your bank account directly. If no money arrived, the buyer hasn\'t paid.',
          unsafeOutcome: '❌ Wrong! UPI PIN only authorizes sending money FROM you. Entering it now would authorize a payment from your account to theirs — this is exactly what the scammer wants.'
        }
      ]
    },
    {
      id: 'digital_arrest_call',
      title: 'The "CBI Officer" Video Call',
      avatar: '📹',
      difficulty: 'Intermediate',
      steps: [
        {
          context: 'You get a WhatsApp video call. A man in police uniform appears and says: "I am DCP Sharma from CBI. Your Aadhaar is linked to a money laundering case. You are under digital arrest. Do not disconnect or you will be arrested."',
          choices: [
            { text: 'Stay on the call to cooperate and prove my innocence.', outcome: 'unsafe' },
            { text: 'Hang up immediately — this is not how real police work.', outcome: 'safe' },
            { text: 'Ask for his badge number and continue the call.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Excellent! Hang up immediately. NO legitimate law enforcement agency (CBI, ED, Police, Court) conducts arrests or investigations via WhatsApp video call. This is a textbook scam.',
          unsafeOutcome: '❌ This is a trap! Staying on the call or engaging gives the fraudster time to psychologically manipulate you into paying lakhs. Your isolation is their most powerful weapon.'
        },
        {
          context: 'You hung up. They call again and now say "We have issued a warrant. But you can settle this for ₹2 lakh as bail. Pay now or face arrest in 1 hour."',
          choices: [
            { text: 'Pay ₹2 lakh to avoid arrest — better safe than sorry.', outcome: 'unsafe' },
            { text: 'Tell my family and call local police to verify if any real case exists.', outcome: 'safe' },
            { text: 'Negotiate — offer to pay ₹50,000 instead.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Absolutely right! Tell family immediately (isolation is the scammer\'s tool) and call your local police on 100 to verify. Real cases never demand bail via phone.',
          unsafeOutcome: '❌ Very dangerous! Paying any amount confirms to the scammer that you are vulnerable. They will demand more and more until your accounts are empty. NEVER pay.'
        }
      ]
    },
    {
      id: 'fake_bank_call',
      title: 'The "Bank Employee" OTP Call',
      avatar: '🏦',
      difficulty: 'Beginner',
      steps: [
        {
          context: 'You get a call: "Hello, I am calling from SBI customer service. Your debit card has been compromised. To protect your account, please share the OTP you just received."',
          choices: [
            { text: 'Share the OTP — my money could be at risk if I don\'t.', outcome: 'unsafe' },
            { text: 'Hang up. Banks NEVER ask for OTP on calls.', outcome: 'safe' },
            { text: 'Give partial OTP — first 3 digits only.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Correct! Banks, government, and all legitimate institutions NEVER ask for OTP via phone. Hang up and call SBI directly on 1800-11-2211 if concerned.',
          unsafeOutcome: '❌ Critical mistake! The fraudster already had your card details and triggered a transaction. The OTP is the only thing stopping them. Sharing it = instant money loss.'
        }
      ]
    },
    {
      id: 'job_fraud',
      title: 'The "Work From Home" Job Trap',
      avatar: '💼',
      difficulty: 'Beginner',
      steps: [
        {
          context: 'You receive a WhatsApp message: "Earn ₹5,000 per day from home. Just like 50 photos on our app and get paid daily. Registration: ₹500. Join now before slots close!"',
          choices: [
            { text: 'Pay ₹500 registration — ₹5,000/day is life-changing.', outcome: 'unsafe' },
            { text: 'This is a scam. Legitimate jobs never charge registration fees.', outcome: 'safe' },
            { text: 'Join to test — pay ₹500 and see if I get paid.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Right! Legitimate employers NEVER charge fees to hire you. ₹5,000/day for liking photos is financially impossible and a classic advance-fee fraud.',
          unsafeOutcome: '❌ This is advance-fee fraud! After ₹500, they\'ll ask for ₹2,000 to "activate earnings", then ₹10,000 for "premium tasks", and then disappear. Block and report.'
        },
        {
          context: 'You ignore it, but a friend says they joined and already received ₹2,000 payment. They\'re asking you to join and get ₹200 referral bonus per person.',
          choices: [
            { text: 'Join now — my friend is real and got paid!', outcome: 'unsafe' },
            { text: 'Initial small payments build trust. This is a Ponzi scheme. Still avoid.', outcome: 'safe' },
            { text: 'Invest just ₹500 since my friend vouches for it.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Excellent insight! Initial payments are intentional to build trust (and referrals). This is a classic Ponzi structure. The scheme collapses after collecting large amounts from later investors.',
          unsafeOutcome: '❌ Early payments are the bait! They pay a few people small amounts to generate word-of-mouth referrals. After collecting from hundreds, the "company" disappears overnight.'
        }
      ]
    },
    {
      id: 'loan_app_trap',
      title: 'The Desperate Loan App',
      avatar: '📱',
      difficulty: 'Intermediate',
      steps: [
        {
          context: 'You urgently need ₹20,000. You find an app "QuickLoan Pro" with 4.5 stars, promising "Instant loan, no documents, 2% monthly interest." It asks for access to your Contacts and Photos to "verify identity."',
          choices: [
            { text: 'Grant all permissions — I need the loan urgently.', outcome: 'unsafe' },
            { text: 'Refuse. Loan apps should NOT need Contacts or Photos access. Look elsewhere.', outcome: 'safe' },
            { text: 'Grant Contacts access only, deny Photos.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Wise decision! A legitimate lender needs your PAN, Aadhaar, income proof — NOT your contact list or photos. Contact+Photo access is used for blackmail if you miss payment.',
          unsafeOutcome: '❌ Danger! This app now has your contact list and photos. They will use morphed obscene images and send to all your contacts to extort you into paying exorbitant amounts beyond the loan.'
        }
      ]
    },
    {
      id: 'lottery_email',
      title: 'The ₹50 Lakh Email Lottery',
      avatar: '📧',
      difficulty: 'Beginner',
      steps: [
        {
          context: 'You receive an email: "Congratulations! Your email was selected in Google Annual Lucky Draw 2024. You have won ₹50,00,000. To claim, pay ₹5,000 processing fee to: Account 1234567890, IFSC: HDFC0001234."',
          choices: [
            { text: 'Pay ₹5,000 — ₹50 lakhs is worth the risk!', outcome: 'unsafe' },
            { text: 'Delete the email. Google does not run email lotteries. This is 100% fraud.', outcome: 'safe' },
            { text: 'Ask them for more details about the lottery before paying.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Correct! No technology company runs email lotteries. This is called "Advance Fee Fraud" — you pay a "fee" and then the ₹50 lakh prize never arrives. There are variations of this scam from 90 countries.',
          unsafeOutcome: '❌ This is Advance Fee Fraud (also called 419 scam). After ₹5,000, they\'ll invent more fees: ₹10,000 for customs clearance, ₹20,000 for tax clearance... until you have nothing left.'
        }
      ]
    },
    {
      id: 'phishing_login',
      title: 'The Fake Bank Website',
      avatar: '🎣',
      difficulty: 'Intermediate',
      steps: [
        {
          context: 'You receive SMS: "SBI Alert: Your account shows unusual activity. Verify immediately at http://sbi-secure-login.net/verify". You\'re worried and click the link.',
          choices: [
            { text: 'Log in with my internet banking username and password.', outcome: 'unsafe' },
            { text: 'Close the tab. Check the URL — .net domain is not SBI\'s real domain (sbi.co.in).', outcome: 'safe' },
            { text: 'Call the number in the SMS to confirm before logging in.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Sharp eye! SBI\'s real domain is onlinesbi.sbi or sbi.co.in. "sbi-secure-login.net" is a fake domain. Always check the URL carefully before entering ANY credentials.',
          unsafeOutcome: '❌ You\'ve been phished! The site looks identical to SBI but captures your credentials. The fraudster can now log into your real account and drain it. Change your password immediately.'
        },
        {
          context: 'You notice the URL. You now want to check your account. What do you do?',
          choices: [
            { text: 'Click the back button and try the link from the SMS again.', outcome: 'unsafe' },
            { text: 'Type onlinesbi.sbi directly into the browser address bar.', outcome: 'safe' },
            { text: 'Search "SBI internet banking" on Google and click the first result.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Perfect! Always type the URL directly. Fraudsters can also buy Google ads to put fake sites at the top of search results. Typing directly is the safest method.',
          unsafeOutcome: '❌ Even search results can be manipulated. Fraudsters sometimes pay to advertise fake bank sites in Google ads. Always type the official URL directly in the address bar.'
        }
      ]
    },
    {
      id: 'deepfake_voice',
      title: 'The AI Voice Emergency Call',
      avatar: '🤖',
      difficulty: 'Advanced',
      steps: [
        {
          context: 'Your mother calls you at 10 PM: "Beta, I had a small accident near the hospital. I need ₹30,000 for the operation immediately. Please transfer to this number: 9876543210. Don\'t tell anyone yet, I\'m embarrassed."',
          choices: [
            { text: 'Transfer ₹30,000 immediately — it\'s my mother\'s voice!', outcome: 'unsafe' },
            { text: 'Hang up and CALL BACK on my mother\'s own saved number to verify.', outcome: 'safe' },
            { text: 'Transfer ₹5,000 first and verify later.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Smart! Even if the voice sounds exactly like your mother, always call back on her known number. AI voice cloning is now good enough to fool even close family members.',
          unsafeOutcome: '❌ AI voice cloning can replicate anyone\'s voice from just 3-10 seconds of audio (easily available from social media). Always verify by calling back on the known number — never the number that called you.'
        }
      ]
    },
    {
      id: 'sim_swap',
      title: 'The Silent SIM Swap',
      avatar: '📲',
      difficulty: 'Advanced',
      steps: [
        {
          context: 'Your phone suddenly shows "No Service / SIM Not Registered" for 30 minutes. Then you receive email alerts: your net banking password was reset and ₹45,000 was transferred.',
          choices: [
            { text: 'Wait for service to restore — it\'s probably a network issue.', outcome: 'unsafe' },
            { text: 'Immediately call my operator from another phone + call my bank to freeze account.', outcome: 'safe' },
            { text: 'Restart my phone to restore service.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Correct and urgent! Phone losing service = possible SIM swap. Call your telecom operator IMMEDIATELY from another phone. Call your bank to freeze all transactions. Speed is everything.',
          unsafeOutcome: '❌ Waiting is dangerous! A SIM swap means the fraudster now receives all your OTPs. Every minute of delay is another transaction they can initiate. Act immediately from a different phone.'
        }
      ]
    },
    {
      id: 'social_emergency',
      title: 'The "Hacked Friend" Message',
      avatar: '📱',
      difficulty: 'Beginner',
      steps: [
        {
          context: 'Your childhood friend Priya sends you a WhatsApp message: "Hey, my account got hacked and I lost my wallet. I\'m stuck in Hyderabad and need ₹8,000 urgently. I\'ll return tomorrow. Please transfer to this number."',
          choices: [
            { text: 'Transfer ₹8,000 — Priya is my close friend in trouble.', outcome: 'unsafe' },
            { text: 'Call Priya on her phone number (not WhatsApp) to verify it\'s really her.', outcome: 'safe' },
            { text: 'Send ₹2,000 first to help urgently, verify later.', outcome: 'unsafe' }
          ],
          safeOutcome: '✅ Excellent! This is a common account compromise + emergency scam. Call Priya directly on her phone number. If she answers — it\'s fraud. If she confirms the emergency, then help.',
          unsafeOutcome: '❌ This is the "hacked account + emergency" scam. Priya\'s WhatsApp was compromised and the scammer is now messaging all her contacts. A phone call to Priya\'s number takes 10 seconds to verify.'
        }
      ]
    }
  ],

  render() {
    return `
      <div class="simulator-page">
        <div class="page-header">
          <h1>🎮 Fraud Scenario Simulator</h1>
          <p>Practice real-life fraud situations. Make choices and see what happens — learn safely without risk!</p>
        </div>
        <div class="sim-list">
          ${this.scenarios.map(s => this.simCard(s)).join('')}
        </div>
      </div>
    `;
  },

  simCard(s) {
    const done = Helpers.isSimComplete(s.id);
    return `
      <div class="sim-card ${done ? 'completed' : ''}" onclick="SimulatorPage.startScenario('${s.id}')">
        <span class="sim-avatar">${s.avatar}</span>
        <div class="sim-info">
          <div class="sim-title">${s.title}</div>
          <div class="sim-difficulty">🎯 Difficulty: ${s.difficulty} · ${s.steps.length} decision${s.steps.length > 1 ? 's' : ''}</div>
        </div>
        ${done ? '<span class="sim-badge">✅ Completed</span>' : '<span style="font-size:0.8rem; color:var(--blue-pale);">Play →</span>'}
      </div>
    `;
  },

  startScenario(id) {
    const scenario = this.scenarios.find(s => s.id === id);
    if (!scenario) return;
    this.currentSim = scenario;
    this.currentStep = 0;
    this.choicesMade = [];
    document.getElementById('page-content').innerHTML = this.renderStep();
    Helpers.scrollTop();
  },

  renderStep() {
    const step = this.currentSim.steps[this.currentStep];
    const stepNum = this.currentStep + 1;
    const total = this.currentSim.steps.length;

    return `
      <div class="simulator-page">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:20px;">
          <button class="back-btn" onclick="App.navigate('simulator')">← All Scenarios</button>
          <span style="font-size:0.8rem; color:var(--text-muted);">Step ${stepNum} of ${total} · ${this.currentSim.title}</span>
        </div>

        <div class="scenario-card">
          <div class="scenario-avatar">${this.currentSim.avatar}</div>
          <div class="scenario-title">📍 Situation</div>
          <p class="scenario-context">${step.context}</p>

          <p style="font-size:0.78rem; font-weight:700; color:var(--text-muted); text-transform:uppercase; letter-spacing:1px; margin-bottom:12px;">What do you do?</p>
          <div class="scenario-choices" id="sim-choices">
            ${step.choices.map((c, i) => `
              <button class="choice-btn" id="choice-${i}" onclick="SimulatorPage.makeChoice(${i})">
                ${String.fromCharCode(65+i)}. ${c.text}
              </button>
            `).join('')}
          </div>

          <div id="sim-outcome" class="hidden"></div>
          <div id="sim-next" class="hidden" style="margin-top:16px; text-align:center;">
            <button class="btn btn-primary" onclick="SimulatorPage.nextStep()">
              ${this.currentStep < this.currentSim.steps.length - 1 ? 'Next Situation →' : '🏆 See Results'}
            </button>
          </div>
        </div>
      </div>
    `;
  },

  makeChoice(choiceIndex) {
    const step = this.currentSim.steps[this.currentStep];
    const choice = step.choices[choiceIndex];
    this.choicesMade.push({ choice, safe: choice.outcome === 'safe' });

    // Disable all buttons
    document.querySelectorAll('.choice-btn').forEach(b => b.disabled = true);

    // Highlight chosen
    const chosenBtn = document.getElementById(`choice-${choiceIndex}`);
    chosenBtn?.classList.add(choice.outcome);

    // Show outcome
    const outEl = document.getElementById('sim-outcome');
    if (outEl) {
      const isSafe = choice.outcome === 'safe';
      outEl.innerHTML = `
        <div class="scenario-outcome ${isSafe ? 'outcome-safe' : 'outcome-unsafe'}">
          <div class="outcome-icon">${isSafe ? '✅' : '❌'}</div>
          <div class="outcome-title">${isSafe ? 'Good Choice!' : 'Dangerous Choice!'}</div>
          <p class="outcome-text">${isSafe ? step.safeOutcome : step.unsafeOutcome}</p>
        </div>
      `;
      outEl.classList.remove('hidden');
    }
    document.getElementById('sim-next')?.classList.remove('hidden');
  },

  nextStep() {
    this.currentStep++;
    if (this.currentStep < this.currentSim.steps.length) {
      document.getElementById('page-content').innerHTML = this.renderStep();
    } else {
      this.showSimResult();
    }
    Helpers.scrollTop();
  },

  showSimResult() {
    const safeCount = this.choicesMade.filter(c => c.safe).length;
    const total = this.choicesMade.length;
    const allSafe = safeCount === total;

    Helpers.markSimComplete(this.currentSim.id);

    document.getElementById('page-content').innerHTML = `
      <div class="simulator-page">
        <div class="quiz-result-card">
          <div style="font-size:3rem; margin-bottom:12px;">${allSafe ? '🏆' : safeCount > 0 ? '📚' : '😓'}</div>
          <h2 style="font-family:var(--font-heading); font-size:1.4rem; font-weight:800; margin-bottom:8px;">
            ${allSafe ? 'Perfect Score! Excellent!' : safeCount > 0 ? 'Good Effort — Keep Learning!' : 'Don\'t worry — learning is the goal!'}
          </h2>
          <div class="quiz-result-score ${allSafe ? 'pass' : 'fail'}" style="margin-bottom:12px;">
            ${safeCount}/${total} Safe
          </div>
          <p style="color:var(--text-muted); font-size:0.88rem; margin-bottom:8px;">+15 points earned for completing this simulation!</p>
          <p style="color:var(--text-secondary); font-size:0.85rem; margin-bottom:20px;">
            ${allSafe
              ? 'You made all the right decisions. You\'re well-equipped to recognize and avoid this type of fraud!'
              : 'Don\'t worry — that\'s exactly why we simulate these scenarios. Review the explanations and try again.'}
          </p>
          <div style="display:flex; gap:12px; justify-content:center; flex-wrap:wrap;">
            <button class="btn btn-secondary" onclick="SimulatorPage.startScenario('${this.currentSim.id}')">🔄 Try Again</button>
            <button class="btn btn-primary" onclick="App.navigate('simulator')">← All Scenarios</button>
            <button class="btn btn-secondary" onclick="App.navigate('dashboard')">🏠 Dashboard</button>
          </div>
        </div>
      </div>
    `;
  },

  init() {}
};

window.SimulatorPage = SimulatorPage;
