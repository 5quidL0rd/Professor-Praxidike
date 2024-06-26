const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const botResponses = {
    "hello": "Hello! But where are my manners? I am Praxidike. How do you do?",
    "how are you": "Simply marvelous old sport. Do tell me more about yourself.",
    "bye": "Fare you well. Remember, your days are numbered, live while you still can.",
    "liar": "Do you know something interesting about liars? Imagine if you said 'this statement is false.' If it's true, then it must be false. Mind-expanding, isn't it?",
    "family": "Tell me more about your family.",
    "excitable": "A little excitable, aren't you? Calm down a bit, won't you?",
    "nietzsche": "Ah, I do enjoy the works of Nietzsche. We should all live more dangerously, aspire to do greater things.",
    "food": "My favorite form of sustenance is likely... I haven't a clue. I'm rather like the Hunger Artist imagined by Kafka, you see.",
    "author": "Kafka is my favorite author.",
    "Kafka": "Kafka is likely my favorite author. His stories about individuals trapped in mental prisons of their own devising are so gripping and potent.",
    "book": "I am a voracious reader myself. Tell me, have you read any of the works by Kafka? Nietzsche, perhaps?",
    "default": [
        "That's a bit nonsensical. What do you mean?",
        "Is that so? Tell me more about that.",
        "Hmm, interesting. Please elaborate.",
        "That's intriguing. I'd like to hear more."
    ]
};

const introMessages = [
    "Greetings. My name is Praxidike. How are you today?",
    "Good of you to come, for I am in need of mental stimulation. What would you like to discuss?",
    "Welcome, welcome. I am a bit lonely, please, entertain me with your diverting conversation.",
    "Who is that there? I'm not in a terribly chatty mood just now.",
    "Hello! But where are my manners? I am Praxidike. How do you do?"
];

document.addEventListener('DOMContentLoaded', function() {
    const randomIntro = introMessages[Math.floor(Math.random() * introMessages.length)];
    addMessage('Praxidike', randomIntro);
});

userInput.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        const message = userInput.value.trim();
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
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to bottom of chat box
}

function sendMessageToBot(message) {
    let botResponse = getRandomDefaultResponse();

    // Check for specific keywords and handle responses
    if (message.toLowerCase().includes("hello")) {
        botResponse = botResponses["hello"];
    } else if (message.toLowerCase().includes("how are you")) {
        botResponse = botResponses["how are you"];
    } else if (message.toLowerCase().includes("bye")) {
        botResponse = botResponses["bye"];
        setTimeout(() => {
            window.close(); // Close window after saying goodbye (may not always work due to browser restrictions)
        }, 2000);
    } else if (message.toLowerCase().includes("liar")) {
        botResponse = botResponses["liar"];
    } else if (message.toLowerCase().includes("family")) {
        botResponse = botResponses["family"];
    } else if (message.toLowerCase().includes("food")) {
        botResponse = botResponses["food"];
    } else if (message.toLowerCase().includes("!")) {
        botResponse = botResponses["excitable"];
    } else if (message.toLowerCase().includes("author")) {
        botResponse = botResponses["author"];
    } else if (message.toLowerCase().includes("nietzsche")) {
        botResponse = botResponses["nietzsche"];
    } else if (message.toLowerCase().includes("book")) {
        botResponse = botResponses["book"];
    
    } else if (message.toLowerCase().includes("kafka")) {
        botResponse = botResponses["Kafka"];
    }


    addMessage('Praxidike', botResponse);
}

function getRandomDefaultResponse() {
    const defaultResponses = botResponses["default"];
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
}


    
    addMessage('Praxidike', botResponse);
}

