const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const botResponses = {
    "hello": "Greetings, my friend.",
    "how are you": "I'm just a bot, but I'm doing great! How about you?",
    "bye": "Fare you well. Remember, your days are numbered, live while you still can.",
    "default": "That's nonsensical. Explain yourself more clearly.",
    "liar": "Do you know something interesting about liars? Imagine if you said 'this statement is false.' If it's true, then it must be false. Mind-expanding, isn't it?",
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
    let botResponse = botResponses["default"];
    

    const farewells = ["bye", "farewell", "goodbye", "see you", "see ya", "cya", "gotta go", "i have to go"];
    if (farewells.some(farewell => message.includes(farewell))) {
        botResponse = botResponses["bye"];
        addMessage('Praxidike', botResponse);
        setTimeout(() => {
            window.close(); // Close the window after sending the farewell message
        }, 2000);
        return;
    }



    if (message.includes('family')) {
        botResponse = "Tell me more about your family.";
    } else if (botResponses[message]) {
        botResponse = botResponses[message];
    }

   
    if (message.includes('liar')) {
        botResponse = "Do you know something interesting about liars? Imagine if you said 'this statement is false.' If it's true, then it must be false. Mind-expanding, isn't it? That's the liar paradox for you.";
    } else if (botResponses[message]) {
        botResponse = botResponses[message];
    }
    
   if(message.includes('!')) {
      botResponse = "A little excitable, aren't you? Calm down a bit, won't you?"
   } else if (botResponses[message]) {
       botResponse = botResponses[message];
   }


    
    addMessage('Praxidike', botResponse);
}

