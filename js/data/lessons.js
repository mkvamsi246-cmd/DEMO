// All Lessons Data
const LESSONS_DATA = {
  cyber: [
    {
      id: "upi_fraud", title: "UPI & Payment Fraud", icon: "💸", points: 10, duration: "8 min",
      intro: "UPI has made payments easy — but fraudsters exploit it daily. Learn how to protect yourself.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Someone calls claiming to be bank/UPI support and asks for your UPI PIN",
            "You receive a 'Collect Request' (money request) from an unknown UPI ID",
            "A 'buyer' sends you a QR code saying 'scan to receive your payment'",
            "Unexpected OTP received on your phone without initiating any transaction",
            "Someone says 'I've sent ₹X, please enter your PIN to confirm receipt'"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Fraudster poses as buyer/seller and tricks you into scanning a payment QR (which SENDS money, not receives)",
            "Fake customer care calls asking for UPI PIN to 'resolve issue'",
            "WhatsApp messages with clickable links that auto-fill UPI payment apps",
            "Fake payment screenshots sent claiming 'money transferred, check your account'"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "NEVER share UPI PIN — not with bank, not with friends, not with anyone",
            "To RECEIVE money, you DO NOT need to enter any PIN or scan QR",
            "Always check the merchant name shown after scanning QR before confirming",
            "Verify payment screenshots independently — check your account",
            "Enable transaction notifications for real-time alerts"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Call 1930 immediately if money is lost",
            "Report at cybercrime.gov.in with transaction details",
            "Contact your bank's fraud helpline to raise a chargeback",
            "Note down: date/time, amount, fraudster's UPI ID, transaction reference number",
            "File FIR at nearest police station"
          ]
        }
      ]
    },
    {
      id: "otp_fraud", title: "OTP Fraud", icon: "🔐", points: 10, duration: "6 min",
      intro: "OTP (One Time Password) is the last line of defence for your account. Never share it — period.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "An unexpected OTP arrives on your phone when you haven't logged in",
            "Caller claims to be from your bank and asks you to 'read out the OTP'",
            "Electricity/gas/water company calling asking for OTP to 'update records'",
            "Someone asks for OTP via WhatsApp or SMS claiming to be a relative in emergency",
            "Caller says 'your account will be blocked if you don't share OTP'"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Fraudster already has your account number, card number, and other details (from data breaches or social engineering)",
            "They attempt a transaction or password reset that triggers an OTP to your number",
            "They call you pretending to be bank/utility and persuade you to share the OTP",
            "Once they have the OTP, they complete the fraudulent transaction within seconds"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "NEVER share OTP — banks, police, courts, telecom companies NEVER ask for OTP",
            "If you shared OTP: immediately call your bank's 24x7 helpline to block card/account",
            "Change all passwords immediately if OTP was for an email/social media account",
            "Inform family members so they don't fall for the same fraud"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Call your bank immediately — most have 24x7 fraud helplines",
            "Call 1930 to report the fraud and freeze fraudster's account",
            "File complaint at cybercrime.gov.in",
            "File FIR at local police station with details of the call and OTP shared"
          ]
        }
      ]
    },
    {
      id: "phishing", title: "Phishing & Fake Links", icon: "🎣", points: 10, duration: "7 min",
      intro: "Phishing uses fake websites and messages to steal your login credentials and money.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "SMS/WhatsApp message: 'Your KYC is expired, click here to update'",
            "Email claiming your bank account will be blocked unless you click a link",
            "Fake websites that look identical to SBI, HDFC, Axis Bank websites",
            "URL looks suspicious: sbi-login.in, hdfc-update.com instead of sbi.co.in",
            "Prize or lottery win messages asking you to 'claim' via a link"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Fraudster creates a copy of an official website (bank, IRCTC, NREGA portal)",
            "Sends mass SMS/email with urgent message and a link to fake site",
            "Victim enters login credentials which are captured instantly",
            "Fraudster uses captured credentials to drain accounts"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "Never click links in SMS, WhatsApp, or email — type the URL directly in browser",
            "Check URL carefully: look for https:// and correct domain name",
            "Banks update KYC in-branch or via verified app — not via SMS links",
            "Use our Scam Checker tool to verify any suspicious link before clicking"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Report phishing website to CERT-In: report.phishing@cert-in.org.in",
            "Forward phishing SMS to 1909",
            "Report to cybercrime.gov.in",
            "If credentials entered: immediately change password and call bank"
          ]
        }
      ]
    },
    {
      id: "fake_customer_care", title: "Fake Customer Care", icon: "📞", points: 10, duration: "6 min",
      intro: "Fraudsters post fake helpline numbers online to intercept customers seeking help.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "You search 'SBI customer care number' on Google and call a result",
            "The person who picks up asks for your debit card number and CVV",
            "Caller asks you to download an app (like AnyDesk, TeamViewer) to 'fix' your issue",
            "Helpline number found on social media, third-party websites, or comment sections"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Fraudsters pay to advertise fake helpline numbers on Google/Facebook",
            "When you call, they pose as bank employees and extract card/account details",
            "They may ask you to install remote access apps and then take control of your phone",
            "Within minutes, they drain your account using the information gathered"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "ONLY use customer care numbers printed on your debit/credit card or passbook",
            "Never search for helpline numbers on Google — go to official bank website directly",
            "Legitimate bank staff never ask for: CVV, OTP, ATM PIN, net banking password",
            "If asked to download AnyDesk/TeamViewer: hang up immediately"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Report fake numbers to TRAI: complaint.trai.gov.in",
            "Report to cybercrime.gov.in",
            "Inform the actual bank so they can warn other customers",
            "Call 1930 if money was lost"
          ]
        }
      ]
    },
    {
      id: "digital_arrest", title: "Digital Arrest Scam", icon: "🚫", points: 10, duration: "8 min",
      intro: "One of India's most dangerous scams — fake cops trap victims on video call for hours or days.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Call or WhatsApp from someone claiming to be CBI, ED, Narcotics, Income Tax, or Customs",
            "They claim your Aadhaar/phone number is linked to a criminal case",
            "They demand you stay on video call continuously or you'll be 'arrested'",
            "They wear fake police uniforms and have fake police station backgrounds",
            "They demand 'settlement money' or bail amount to close the 'case'"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Victims are psychologically trapped on video call — sometimes for 24-72 hours",
            "Fraudsters use fear, isolation, and urgency to prevent victims from thinking clearly",
            "They instruct victims not to tell family or 'case will be filed against them too'",
            "They demand money transfer after money transfer until the victim's accounts are drained"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "HANG UP immediately — no legitimate agency conducts 'digital arrests'",
            "CBI, police, courts NEVER summon via WhatsApp video call",
            "Tell your family immediately — isolation is the scammer's most powerful tool",
            "Do NOT send any money — not as bail, fine, processing fee, or anything",
            "Call local police station to verify if any actual case exists"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Call 1930 immediately",
            "File complaint at cybercrime.gov.in",
            "Report to your nearest police station with call recordings if possible",
            "Inform family and community to spread awareness"
          ]
        }
      ]
    },
    {
      id: "loan_app_fraud", title: "Illegal Loan App Fraud", icon: "💰", points: 10, duration: "8 min",
      intro: "Illegal instant loan apps target desperate borrowers and then blackmail them.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "App promises instant loan in 5 minutes with no documents",
            "App asks for access to: Contacts, Gallery, SMS, Camera",
            "Interest rate is not clearly mentioned or shows '0% first loan'",
            "Repayment period is extremely short (7-14 days)",
            "Recovery agents start calling within 24 hours with abusive language"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "App steals contact list and photos from your phone during installation",
            "They disburse a small amount but deduct heavy 'processing fees' upfront",
            "When repayment is due, they create morphed obscene photos and threaten to send to contacts",
            "Even if you repay, they demand more or continue harassment"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "Only borrow from RBI-regulated banks and NBFCs listed at rbi.org.in",
            "Uninstall suspicious loan apps immediately",
            "Revoke app permissions in phone settings: Settings > Apps > Permissions",
            "Do NOT pay ransom — it encourages further extortion",
            "Inform family and block unknown callers"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "File complaint at cybercrime.gov.in — select 'Online and Social Media > Other'",
            "Call 1930 immediately",
            "Report to RBI Ombudsman: rbi.org.in/cms/Docs/English/OmbudsmanForm",
            "File FIR at police station for harassment and blackmail"
          ]
        }
      ]
    },
    {
      id: "job_fraud", title: "Fake Job & Work-from-Home Fraud", icon: "💼", points: 10, duration: "7 min",
      intro: "Job fraudsters exploit unemployment and work-from-home aspirations to steal money.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Job offer on WhatsApp from unknown number — 'Work from home, earn ₹5,000/day'",
            "They ask for registration fee, security deposit, or training fee before starting",
            "The job involves 'liking videos', 'rating products', 'task-based income'",
            "Too-good salary for minimal work: Data Entry ₹50,000/month",
            "Company has no verifiable physical address or registration"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Initial 'task payments' build trust — victims are paid small amounts first",
            "Then asked to invest money for 'higher earning tasks' or 'unlock premium jobs'",
            "Victims invest more and more, then platform disappears overnight",
            "Some scams involve financial fraud — victims unknowingly become money mules"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "Legitimate jobs never charge fees upfront",
            "Verify company registration at mca.gov.in",
            "Search 'company name + scam' on Google before applying",
            "Never share Aadhaar, PAN, bank account details with unverified recruiters",
            "Ask for written appointment letter on company letterhead"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Report to cybercrime.gov.in",
            "Call 1930",
            "File FIR at police station for cheating and fraud",
            "Report on National Consumer Helpline: 1915"
          ]
        }
      ]
    },
    {
      id: "deepfake_scam", title: "Deepfake & AI Voice Scam", icon: "🤖", points: 10, duration: "7 min",
      intro: "AI can now clone anyone's voice in seconds. Learn to defend yourself against this new threat.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Urgent call from a 'relative' voice claiming emergency and asking for immediate money transfer",
            "Video call from someone looking like a known person but facial expressions seem slightly off",
            "Voice sounds familiar but the number is unknown",
            "Extreme urgency and request to not tell other family members"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Fraudsters harvest voice samples from social media videos/reels",
            "AI generates a realistic clone of the voice within minutes",
            "They call target's family members claiming a medical emergency or accident",
            "Panic prevents victims from verifying — they transfer money immediately"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "Always hang up and call back on the relative's KNOWN number",
            "Establish a secret family code word for real emergencies",
            "Limit public voice/video content on social media",
            "When in doubt — video call the person on their known number to verify identity",
            "Do NOT transfer money without in-person or verified video verification"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Report at cybercrime.gov.in under 'Other Cyber Crime'",
            "Call 1930",
            "Provide phone numbers used for the scam call to police",
            "Report deepfake content to the social media platform"
          ]
        }
      ]
    },
    {
      id: "qr_fraud", title: "QR Code Fraud", icon: "📷", points: 10, duration: "5 min",
      intro: "QR codes are convenient but dangerous if you don't understand how they work.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Someone sends you a QR code via WhatsApp to 'receive payment'",
            "An OLX/online marketplace seller sends QR code to 'verify your account' before sending item",
            "Physical QR code at a shop looks like it has a sticker placed over the original",
            "A 'customer' on OLX asks you to scan their QR code as 'buyer verification'"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "QR codes only SEND money — they are never used to RECEIVE money",
            "Scammer creates a payment QR and tells victim 'scan this to get refund/payment'",
            "Victim scans QR and completes payment to scammer instead of receiving money",
            "Physical QR sticker fraud: stickers placed over shop QR codes redirect payment to fraudster"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "RECEIVING money never requires scanning a QR code",
            "Always check merchant/payee name displayed after scanning before confirming",
            "Inspect physical QR codes for stickers/tampering",
            "Use 'Pay by Contact' when possible instead of QR"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Call 1930 immediately after money loss",
            "Report at cybercrime.gov.in",
            "Inform the shop owner if you find a tampered QR code",
            "File FIR at local police station"
          ]
        }
      ]
    },
    {
      id: "sim_swap", title: "SIM Swap Fraud", icon: "📲", points: 10, duration: "6 min",
      intro: "Fraudsters get a duplicate SIM to intercept your banking OTPs without your knowledge.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Your phone suddenly shows 'No Service' or 'SIM Not Registered' — even at home",
            "You stop receiving calls and SMS without any clear reason",
            "You receive bank SMS alerts for transactions you didn't make",
            "Unknown person recently asked for copies of your Aadhaar or other ID"
          ]
        },
        {
          heading: "🚫 How the Scam Works",
          content: [
            "Fraudster collects your ID proof (Aadhaar) through social engineering or data breach",
            "They visit telecom retailer claiming SIM was lost and request duplicate",
            "Your SIM is deactivated; they get a new SIM with your number",
            "All banking OTPs now go to their SIM — they access and drain your accounts"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "If phone loses service unexpectedly: call your telecom provider IMMEDIATELY from another phone",
            "Call your bank to temporarily suspend online banking",
            "Never share Aadhaar copies with unknown persons",
            "Register an alternate number with your bank for alerts"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Call telecom operator immediately to report unauthorized SIM swap",
            "Call bank to freeze account and change net banking credentials",
            "File complaint at cybercrime.gov.in",
            "Call 1930",
            "File FIR at police station"
          ]
        }
      ]
    },
    {
      id: "social_media_fraud", title: "Social Media Fraud", icon: "📱", points: 10, duration: "6 min",
      intro: "Social media is a goldmine for fraudsters — they use it to profile, manipulate, and cheat you.",
      sections: [
        {
          heading: "⚠️ Warning Signs",
          content: [
            "Friend request from an account that looks like someone you already follow",
            "DM from 'friend' claiming emergency and asking for money transfer",
            "Lottery/prize notification: 'You've won! Share bank details to claim'",
            "Romantic stranger quickly expressing love and asking for money",
            "Someone asking you to participate in 'investment opportunity' they discovered"
          ]
        },
        {
          heading: "✅ Immediate Actions",
          content: [
            "Set all profiles to Private — limit what strangers can see",
            "Never share Aadhaar, PAN, bank details on social media",
            "Verify any urgent money request via direct phone/video call on known number",
            "Enable 2FA on all social media accounts",
            "Never click links in DMs from unknown accounts"
          ]
        },
        {
          heading: "📋 Reporting Steps",
          content: [
            "Report fake/fraud accounts directly on the platform",
            "Report to cybercrime.gov.in",
            "Call 1930 if money was transferred",
            "File FIR for cheating"
          ]
        }
      ]
    }
  ],
  financial: [
    {
      id: "upi_safety_fin", title: "UPI & Digital Payment Safety", icon: "💳", points: 10, duration: "7 min",
      intro: "Master safe digital payment habits to protect your money every day.",
      sections: [
        { heading: "🔐 UPI Security Essentials", content: ["Set a strong, unique UPI PIN — not your birth year or 1234","Enable transaction limits in your UPI app settings","Use separate UPI IDs for business and personal transactions","Review linked bank accounts regularly in UPI app","Deactivate UPI ID on old phones immediately after switching phones"] },
        { heading: "💡 Safe Payment Practices", content: ["Always verify recipient's name before confirming payment","Use BHIM UPI, GPay, PhonePe — only official apps from Play Store/App Store","Enable transaction notifications for instant alerts","Double-check amount before pressing 'Pay'","Never save UPI credentials on shared devices"] },
        { heading: "🛡️ What To Do If Fraud Happens", content: ["Call 1930 within the first hour for best chance of fund recovery","Contact your bank's fraud team to raise dispute","File at cybercrime.gov.in with all transaction details","RBI Ombudsman: if bank doesn't resolve in 30 days"] }
      ]
    },
    {
      id: "bank_card_safety", title: "Bank & Card Protection", icon: "🏦", points: 10, duration: "8 min",
      intro: "Your bank account and cards need active protection — know how to secure them.",
      sections: [
        { heading: "🔐 Account Security", content: ["Use net banking only on personal, secure devices","Always log out from net banking — never just close browser","Set daily transaction limits as a safety net","Enable SMS and email alerts for all transactions","Register nominee for your accounts"] },
        { heading: "💳 Card Safety", content: ["Never share: Card number, CVV, expiry date, OTP — not even with 'bank employees'","Cover keypad while entering ATM PIN","Check ATM card slot for skimming devices before inserting card","Immediately block card if lost: most banks have a missed call blocking service","Use virtual debit card for online shopping","International transactions: disable if you don't travel abroad"] },
        { heading: "📱 Mobile Banking Safety", content: ["Enable app lock (PIN/biometric) on your banking apps","Never use public Wi-Fi for banking","Keep your banking app updated","Unlink mobile banking from old phones before selling"] }
      ]
    },
    {
      id: "loan_emi", title: "Loan & EMI Awareness", icon: "📊", points: 10, duration: "7 min",
      intro: "Understanding loans and EMIs protects you from debt traps and illegal lending.",
      sections: [
        { heading: "📋 Before Taking a Loan", content: ["Only borrow from RBI-registered banks and NBFCs","Compare interest rates on RBI's website and bankbazaar.com","Understand EMI = Principal + Interest — calculate total repayment","Read all terms: processing fee, prepayment penalty, late fee","Check your CIBIL credit score free at cibil.com or via banks"] },
        { heading: "⚠️ Red Flags in Loan Offers", content: ["'Instant loan with no documents' = usually illegal","Interest rate above 36% per year is predatory","Hidden fees not disclosed upfront","Asking for contact/gallery access on your phone","Pressure to decide immediately"] },
        { heading: "📈 Managing EMIs Smartly", content: ["Keep EMI total below 40% of monthly income","Set up auto-debit for EMIs to avoid missed payments","Missed EMI damages CIBIL score significantly","Prepay loans when possible to save interest","If struggling: inform bank before missing — restructuring is possible"] }
      ]
    },
    {
      id: "budgeting", title: "Budgeting & Savings Basics", icon: "💰", points: 10, duration: "7 min",
      intro: "A simple budget is the foundation of financial security for every family.",
      sections: [
        { heading: "📊 The 50-30-20 Rule", content: ["50% of income: Essential needs (food, rent, utilities, EMIs)","30% of income: Wants (entertainment, dining, shopping)","20% of income: Savings and investments","Adjust percentages as needed — even saving 10% is a great start"] },
        { heading: "💡 Savings Strategies", content: ["Pay yourself first: transfer to savings on salary day before spending","Emergency fund: keep 3-6 months of expenses in savings account","Recurring Deposit (RD): guaranteed returns, government-backed","Post Office Savings: accessible even in villages, government-guaranteed","Public Provident Fund (PPF): tax-free, 15-year savings with great returns"] },
        { heading: "🏦 Safe Places to Save", content: ["Nationalized Banks (SBI, BoI, Canara): insured up to ₹5 lakh per account","Post Office: Sukanya Samriddhi, NSC, KVP schemes — very safe","Avoid: chit funds, private finance companies, private NBFCs without verification","NEVER keep all savings in one place"] }
      ]
    },
    {
      id: "insurance", title: "Insurance Basics", icon: "🛡️", points: 10, duration: "6 min",
      intro: "Insurance is not an expense — it's protection for your family's financial future.",
      sections: [
        { heading: "📋 Essential Insurance Types", content: ["Health Insurance: covers hospitalization — essential for every family","Life Insurance (Term): provides for family if breadwinner dies — very affordable","Pradhan Mantri Jeevan Jyoti Bima Yojana (PMJJBY): only ₹436/year, ₹2 lakh cover","Pradhan Mantri Suraksha Bima Yojana (PMSBY): ₹20/year, accident cover","Crop Insurance: PMFBY for farmers — protects against natural disasters"] },
        { heading: "⚠️ Insurance Scams to Avoid", content: ["'Your policy has bonus — pay ₹X to unlock it' = scam","Unsolicited calls offering insurance with guaranteed returns","Agents inflating premium or adding riders without explaining","Always verify policy by calling IRDAI at 155255 or irdai.gov.in","Get policy document in writing — never just a WhatsApp message"] },
        { heading: "💡 Making Claims", content: ["Document everything: hospitalization, accident, crop damage","Claim within specified time period — check policy for deadlines","Keep all original bills and receipts","File complaint with IRDAI if insurer wrongly rejects claim"] }
      ]
    },
    {
      id: "investment_risk", title: "Investment Risk & Ponzi Schemes", icon: "📈", points: 10, duration: "8 min",
      intro: "Understanding investment risk protects your savings from scams that promise impossible returns.",
      sections: [
        { heading: "🚩 Red Flags: Ponzi & Investment Scams", content: ["Promise of guaranteed returns above 12% per year = suspect","Pressure to recruit friends/family to earn more (pyramid structure)","No clear explanation of how returns are generated","Unable to withdraw money despite promises","Not registered with SEBI for stocks, or RBI for deposits"] },
        { heading: "📊 Safe vs Risky Investments", content: ["Very Safe: FD/RD in nationalized banks, PPF, NSC, Post Office Schemes (up to ₹5L DICGC insured)","Moderate: Mutual Funds (market-linked, SEBI-regulated)","Higher Risk: Stocks, Crypto (can lose 100% — only invest what you can afford to lose)","NEVER invest in: unregistered schemes, chit fund companies, private finance companies promising high returns"] },
        { heading: "📋 How to Verify Investments", content: ["Check SEBI registration: sebi.gov.in/sebiweb/home/HomeAction.do","Check IRDAI for insurance-linked investments","Ask for prospectus/offer document in writing","Consult a SEBI-registered financial advisor","If it sounds too good to be true — it is"] }
      ]
    },
    {
      id: "senior_citizen_safety", title: "Senior Citizen Financial Safety", icon: "👴", points: 10, duration: "7 min",
      intro: "Elderly people are disproportionately targeted by fraudsters. Extra precautions keep them safe.",
      sections: [
        { heading: "🎯 Common Scams Targeting Seniors", content: ["'Your pension/provident fund needs verification — share details'","Fake government scheme calls offering enhanced pension","Lottery wins that require 'tax payment' upfront","Grandchildren emergency calls (AI voice cloning)","Hospital fraud: 'Your family member is in hospital, pay now'"] },
        { heading: "🛡️ Protective Measures", content: ["Assign a trusted family member as financial guardian","Set up joint accounts for large transactions","Freeze/limit online transactions on savings accounts","Whitelist trusted family numbers — block unknown callers","Visit bank in person for any large transaction instead of doing it by phone"] },
        { heading: "📋 Government Schemes for Seniors", content: ["Senior Citizens Savings Scheme (SCSS): 8.2% interest, government-backed","Pradhan Mantri Vaya Vandana Yojana (PMVVY): pension scheme through LIC","EPFO Pension: verify and update nominees at unifiedportal-mem.epfindia.gov.in","Aadhaar-linked pension: update bank account link at nearest bank/post office"] }
      ]
    }
  ],
  digital: [
    {
      id: "smartphone_safety", title: "Smartphone Safety", icon: "📱", points: 10, duration: "7 min",
      intro: "Your smartphone contains your entire digital life. Here's how to secure it properly.",
      sections: [
        { heading: "🔒 Basic Phone Security", content: ["Set screen lock: prefer PIN (6 digits) or biometric fingerprint","Enable 'Find My Phone' feature (Google Find My Device / Apple Find My)","Encrypt phone storage: Settings > Security > Encryption","Disable USB debugging unless you're a developer","Keep phone OS updated — updates fix security vulnerabilities"] },
        { heading: "📲 App Management", content: ["Only install apps from Google Play Store or Apple App Store","Check app reviews and developer before installing","Review permissions every new app requests — deny unnecessary ones","Uninstall apps you no longer use","Check data usage — suspicious apps consume data in background"] },
        { heading: "🌐 Network Safety", content: ["Avoid public Wi-Fi for banking and personal accounts","Use mobile data for sensitive transactions","Enable VPN when using public Wi-Fi if necessary","Turn off Wi-Fi and Bluetooth when not in use","Never auto-connect to open networks"] }
      ]
    },
    {
      id: "passwords_2fa", title: "Passwords & Two-Factor Authentication", icon: "🔑", points: 10, duration: "7 min",
      intro: "Strong passwords and 2FA are your strongest defence against account takeover.",
      sections: [
        { heading: "🔐 Creating Strong Passwords", content: ["Minimum 12 characters: letters + numbers + symbols","Avoid: name, birth date, mobile number, '123456', 'password'","Use a phrase: 'MyDog@RunsFast#2024'","Different password for every important account","Use a password manager app (Bitwarden, 1Password — free options available)"] },
        { heading: "📱 Two-Factor Authentication (2FA)", content: ["Enable 2FA on: email, banking apps, social media, UPI apps","2FA means even if password is stolen, attacker can't log in without the 2nd factor","Use authenticator app (Google Authenticator, Authy) instead of SMS when available","Never share 2FA codes with anyone","Save backup codes in a secure place when setting up 2FA"] },
        { heading: "🔄 Password Hygiene", content: ["Change passwords every 90 days for critical accounts","Change immediately if you suspect a breach","Check if your email is in a data breach: haveibeenpwned.com","Log out from all devices after password change"] }
      ]
    },
    {
      id: "safe_app_install", title: "Safe App Installation", icon: "📥", points: 10, duration: "5 min",
      intro: "Malicious apps steal your data and money. Know how to install apps safely.",
      sections: [
        { heading: "✅ Safe Installation Practices", content: ["Only install from Play Store (Android) or App Store (iPhone)","Verify developer name matches the official company","Read reviews — look for patterns of complaints","Check app permissions before installing","Look at 'Last updated' date — abandoned apps may have security issues"] },
        { heading: "🚫 Dangerous App Categories", content: ["APK files from WhatsApp, Telegram, websites — NEVER install","'Cracked' or 'modded' versions of popular apps","Loan apps not listed in RBI's approved list","Apps asking for SMS, Contacts, Admin permission without clear reason","Remote access apps shared by unknown persons (AnyDesk, TeamViewer)"] },
        { heading: "🛡️ After Installation", content: ["Check permissions: Settings > Apps > [App Name] > Permissions","Revoke any permission the app doesn't need","Monitor battery and data usage — malicious apps drain both","Use Play Protect: Play Store > Profile > Play Protect > Scan"] }
      ]
    },
    {
      id: "safe_browsing", title: "Safe Internet Browsing", icon: "🌐", points: 10, duration: "6 min",
      intro: "Safe browsing habits protect you from phishing, malware, and tracking.",
      sections: [
        { heading: "🌐 Browser Safety Basics", content: ["Use updated browsers: Chrome, Firefox, Safari — keep them updated","Check for https:// (padlock icon) before entering any personal data","Don't ignore SSL certificate warnings — leave the site immediately","Avoid pirated content websites — they contain malware","Clear browsing history on shared computers after use"] },
        { heading: "🔍 Recognizing Fake Websites", content: ["Look for subtle misspellings: g00gle.com, sbi-login.in","Check domain extension: sbi.co.in (real) vs sbi.net.in (fake)","Use our Scam Checker for any suspicious URL","Legitimate banks never ask for password via email link","If site looks unusual even if URL looks right — leave immediately"] },
        { heading: "🛡️ Browser Privacy", content: ["Use 'Incognito' mode on shared computers","Install uBlock Origin ad-blocker to avoid malicious ads","Don't save passwords in browser on shared devices","Disable browser notifications from suspicious sites","Use Google's Safe Browsing check: transparencyreport.google.com/safe-browsing/search"] }
      ]
    },
    {
      id: "privacy_settings", title: "Privacy Settings & Data Protection", icon: "🔏", points: 10, duration: "6 min",
      intro: "Your personal data is valuable. Control who gets access to it.",
      sections: [
        { heading: "📱 Phone Privacy Settings", content: ["Android: Settings > Privacy > Permission Manager — audit all apps","Review Location access: only give 'While Using' — never 'Always'","Disable ad personalization: Google Account > Data & Privacy > Ad Settings","Review Google activity: myactivity.google.com","Check which apps have Microphone/Camera access"] },
        { heading: "🔐 Aadhaar Privacy", content: ["Use Masked Aadhaar (shows only last 4 digits) for sharing — download at uidai.gov.in","Lock Aadhaar biometric when not needed: lock.uidai.gov.in","Never share Aadhaar OTP with anyone","Check Aadhaar authentication history: resident.uidai.gov.in","Virtual ID (VID) is safer for verification — generate at UIDAI portal"] },
        { heading: "🌐 Online Privacy", content: ["Don't overshare on social media — location, workplace, daily routine","Use different email for shopping, banking, and personal communication","Opt out of data sharing in app settings","Read privacy policy before signing up — look for data selling clauses","Use DuckDuckGo as search engine for less tracking"] }
      ]
    },
    {
      id: "social_media_safety", title: "Social Media Safety", icon: "🤳", points: 10, duration: "7 min",
      intro: "Billions use social media — so do fraudsters. Learn to protect your presence.",
      sections: [
        { heading: "⚙️ Account Security Settings", content: ["Facebook/Instagram: Settings > Security > Two-factor Authentication — ENABLE","Check active sessions and remove unknown devices","Use strong unique password for each social platform","Review connected third-party apps and revoke unknown ones","Enable login alerts for new device logins"] },
        { heading: "🔏 Privacy Controls", content: ["Set profile to Private — approve followers/friends manually","Limit post audience: Friends only, not Public","Hide phone number, email, date of birth from public profile","Disable location tagging in posts","Don't post photos of Aadhaar, PAN, passport, tickets publicly"] },
        { heading: "🚩 Reporting & Blocking", content: ["Block and report fake profiles impersonating you or friends","Report explicit/threatening messages immediately","Screenshot and report cyberbullying to platform and cybercrime.gov.in","Don't engage with trolls — block and report","Children under 13 should not have social media accounts"] }
      ]
    }
  ]
};

window.LESSONS_DATA = LESSONS_DATA;
