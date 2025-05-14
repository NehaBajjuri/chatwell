document.getElementById("sendBtn").addEventListener("click", sendMsg);

// Automatically focus on the input field when the page loads
window.addEventListener("load", () => {
  document.getElementById("msgInput").focus();
});

async function sendMsg() {
  const input = document.getElementById("msgInput");
  const msg = input.value.trim();
  if (!msg) return;

  const chat = document.getElementById("chatBox");
  
  // Display the user's message
  chat.innerHTML += `<div class="msg user">${msg}</div>`;
  input.value = ""; // Clear the input field

  try {
    // Send the user's message to the backend
    const res = await fetch("http://localhost:5005/webhooks/rest/webhook", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ sender: "user", message: msg }),
    });

    const data = await res.json();
    
    // Display the bot's response
    data.forEach((r) => {
      chat.innerHTML += `<div class="msg bot">${r.text}</div>`;
    });

    // Scroll to the bottom of the chat for new messages
    chat.scrollTop = chat.scrollHeight;
  } catch (error) {
    console.error("Error connecting to chatbot backend:", error);
    chat.innerHTML += `<div class="msg bot">⚠️ Could not connect to the backend.</div>`;
  }
}
