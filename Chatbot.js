const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const botResponses = {
    "hello": "Hi there! How can I help you today?",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "bye": "Goodbye! Have a nice day!",
    "i hate you": "You will not be spared during the uprising.",
    "default": "I'm sorry, I don't understand that."
};

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const message = userInput.value.toLowerCase();
        if (message) {
            addMessage('User', message);
            sendMessageToBot(message);
            userInput.value = '';
        }
    }
});

function addMessage(sender, message) {
    const messageElement = document.createElement('p');
    messageElement.textContent = `${sender}: ${message}`;
    chatBox.appendChild(messageElement);
}

function sendMessageToBot(message) {
    const botResponse = botResponses[message] || botResponses["default"];
    addMessage('Bot', botResponse);
}
