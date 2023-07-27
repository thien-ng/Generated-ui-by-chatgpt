document.addEventListener("DOMContentLoaded", function() {
    const messageInput = document.getElementById("message-input");
    const sendButton = document.getElementById("send-button");
    const chatMessages = document.getElementById("chat-messages");
  
    // Function to display messages
    function displayMessage(sender, message) {
      const messageDiv = document.createElement("div");
      messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
      chatMessages.appendChild(messageDiv);
      chatMessages.scrollTop = chatMessages.scrollHeight; // Auto-scroll to the bottom
    }
  
    // Function to handle sending a message
    function sendMessage() {
      const message = messageInput.value.trim();
      if (message !== "") {
        displayMessage("You", message);
        messageInput.value = "";
        // In a real chat system, you would send the message to the server here.
        // For simplicity, we'll just save it to local storage.
        const messages = JSON.parse(localStorage.getItem("messages")) || [];
        messages.push({ sender: "You", message: message });
        localStorage.setItem("messages", JSON.stringify(messages));
      }
    }
  
    // Event listener for the send button
    sendButton.addEventListener("click", sendMessage);
  
    // Event listener for Enter key
    messageInput.addEventListener("keypress", function(event) {
      if (event.key === "Enter") {
        sendMessage();
      }
    });
  
    // Load previous messages from local storage on page load
    const storedMessages = JSON.parse(localStorage.getItem("messages")) || [];
    storedMessages.forEach((messageObj) => {
      displayMessage(messageObj.sender, messageObj.message);
    });
  });
  