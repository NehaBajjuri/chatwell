document.getElementById("sendBtn").addEventListener("click", sendMsg);

async function sendMsg() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById("chatBox");
  chat.innerHTML += `<div class="msg user">${msg}</div>`;
  input.value = "";

  try {
    const res = await fetch("http://localhost:5005/webhooks/rest/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender: "user", message: msg }),
    });

    const data = await res.json();
    data.forEach((r) => {
      chat.innerHTML += `<div class="msg bot">${r.text}</div>`;
    });

    chat.scrollTop = chat.scrollHeight;
  } catch (error) {
    console.error("Error connecting to chatbot backend:", error);
    chat.innerHTML += `<div class="msg bot">⚠️ Could not connect to the backend.</div>`;
  }
}
fetch("http://localhost:5005/webhooks/rest/webhook", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ sender: "user", message: userMessage })
  })
  