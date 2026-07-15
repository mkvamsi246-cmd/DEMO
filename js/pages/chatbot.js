// Chatbot Page Module
const ChatbotPage = {
  render() {
    return `
      <div class="chatbot-page">
        <div class="page-header">
          <h1>🤖 Suraksha Bot — Help Assistant</h1>
          <p>Ask any cyber safety or fraud question. Available 24×7 for instant answers.</p>
        </div>

        <div class="alert alert-danger" style="margin-bottom:16px; font-size:0.85rem;">
          🆘 <strong>Emergency?</strong> If money was just stolen — <a href="tel:1930" style="color:var(--crimson-light); font-weight:800;">CALL 1930 NOW</a> (Cyber Crime Helpline — 24×7)
        </div>

        <!-- Quick Prompts -->
        <div style="margin-bottom:12px;">
          <p style="font-size:0.75rem; color:var(--text-muted); margin-bottom:8px;">💡 Quick questions:</p>
          <div class="quick-prompts-grid" id="quick-prompts">
            ${(window.QUICK_PROMPTS || []).map(p => `
              <button class="quick-prompt-btn" onclick="ChatbotPage.sendQuick('${p.key}')">${p.label}</button>
            `).join('')}
          </div>
        </div>

        <!-- Chat Window -->
        <div class="chat-window" id="chat-window">
          <div class="chat-bubble bot">
            👋 <strong>Namaste! I'm Suraksha Bot.</strong><br><br>
            I can help you with:<br>
            • How to report cyber fraud (1930, cybercrime.gov.in)<br>
            • UPI, OTP, phishing, loan app safety<br>
            • Digital arrest and job fraud alerts<br>
            • Password and account security<br><br>
            Type your question below or tap a quick button above!
          </div>
        </div>

        <!-- Input Row -->
        <div class="chat-input-row">
          <input class="chat-input" id="chat-input" type="text"
            placeholder="Type your question here..."
            onkeydown="if(event.key==='Enter') ChatbotPage.send()" />
          <button class="chat-send-btn" onclick="ChatbotPage.send()">➤</button>
        </div>
        <p style="font-size:0.7rem; color:var(--text-muted); margin-top:8px; text-align:center;">
          Answers are from a verified knowledge base. For emergencies, always call 1930.
        </p>
      </div>
    `;
  },

  sendQuick(key) {
    document.getElementById('chat-input').value = key;
    this.send();
  },

  send() {
    const input = document.getElementById('chat-input');
    const text = input?.value?.trim();
    if (!text) return;
    input.value = '';

    this.addBubble(text, 'user');

    setTimeout(() => {
      const answer = this.getAnswer(text);
      this.addBubble(answer, 'bot');
    }, 600);
  },

  addBubble(text, type) {
    const window_el = document.getElementById('chat-window');
    if (!window_el) return;
    const div = document.createElement('div');
    div.className = `chat-bubble ${type}`;
    div.innerHTML = text;
    window_el.appendChild(div);
    window_el.scrollTop = window_el.scrollHeight;
  },

  getAnswer(query) {
    const lower = query.toLowerCase();
    const kb = window.CHATBOT_KB || [];

    for (const entry of kb) {
      if (entry.keywords.some(kw => lower.includes(kw))) {
        return entry.answer;
      }
    }

    // Fallback
    return `🤔 I don't have a specific answer for that. Here's what I suggest:<br><br>
      • For any fraud or emergency: Call <strong>1930</strong><br>
      • File complaint at: <a href="https://cybercrime.gov.in" target="_blank" style="color:#60a5fa;">cybercrime.gov.in</a><br>
      • Try rephrasing your question using keywords like: <em>UPI, OTP, phishing, loan app, digital arrest, password, scam</em><br><br>
      📚 You can also explore the <strong>Cyber Crime Hub</strong> for detailed lessons on all major fraud types.`;
  },

  init() {}
};

window.ChatbotPage = ChatbotPage;
