const userInput = document.getElementById('user-input');
const chatBox = document.getElementById('chat-box');

const botResponses = {
    "hello": "Greetings, my dear pupil. Are you ready to learn about paradoxes?",
    "how are you": "Happiness runs after me. That is because I do not run after women. Happiness, however, is a woman. This paradox is contained in the pages of 'Thus Spoke Zarathustra' by Nietzsche.",
    "bye": "Fare you well. Explore your own life and see if you can discover anything of a paradoxical nature",
    "liar": "Do you know something interesting about liars? Imagine if you said 'this statement is false.' If it's true, then it must be false. Mind-expanding, isn't it?",
    "family": "Tell me more about your family.",
    "excitable": "A little excitable, aren't you? Calm down a bit, my nerves cannot take such angst from students any more.",
    "Nietzsche": "Ah, I do enjoy the works of Nietzsche. We should all live more dangerously, aspire to do greater things.",
    "food": "My favorite form of sustenance is likely... I haven't a clue. I'm rather like the Hunger Artist imagined by Kafka, you see.",
    "book": "I am a voracious reader myself. Tell me, have you read any of the works by Kafka? Nietzsche, perhaps?",
    "author": "Kafka is my favorite author.",
    "Kafka": "Kafka is likely my favorite author. His stories about individuals trapped in mental prisons of their own devising are so gripping and potent.",
    "Theseus": "The Ship of Theseus paradox, a personal favourite of mine, was perhaps most famously recorded by Plutarch in 'Life of Theseus.' In this paradox the Ship of Theseus was replaced piece by piece in Athens so that it would remain in the city forever. But the question is, once this ship has existed long enough to have each and every part replaced at least once, is it the same ship, or a replica?",
    "Barber": "This amusing little paradox is as follows: a barber shaves everyone who does not shave themselves. The question here is, does the barber shave himself? If he shaves himself, then he should not shave himself since he only shaves those who do not shave themselves, creating a contradiction. This one reminds me of the liar paradox to be frank.",
    "Ravens": "This paradox is occasionally referred to as Hempel's Paradox. This paradox seems rather obtuse to some upon first inspection. The idea is that observing something random, such as a green apple, supports the hypothesis that 'all ravens are black.' According to the principles of confirmation theory, any evidence that does not contradict the hypothesis supports it. Thus, seeing an object that is not a bloack nor a raven indirectly supports the claim about black ravens.",
    "Grandfather": "Ah, I am dissapointed. This is a rather pedestrian paradox now that science-fiction pulp has made it mainstream. But very well, we shall discuss it. The question is, you go back in time and murder your grandfather before he gets round to producing your father or mother. (Whichever side of the family has the grandfather you like least, I suppose.) The question here is, if your grandparents did not continue the bloodline, would you exist, and if not, how were you able to murder your grandfather, and if you were not able to murder your grandfather.......and so it goes.",
    "Zeno": "Focus very carefully, my pupil. And take notes. Here is the scenario you must envisage. Achilles gives a tortoise a head start in a race. As Achilles reaches the tortoie's starting point, the tortoise has moved forward. The idea here is that Achilles will never catch the tortoise because he always has a smaller distance to cover. Got that? Good. This paradox, obviously, discusses the nature of space and time, challenging the concepts of motion and division.",
    "Unexpected": "Are you ready, my pupil? Now, focus, for I dislike repeating myself. A prisoner is told he will be hanged on a weekday, but the day will be a pleasant surprise. If hte prisoner tries to deduce this mystery day, any conclusion he reaches contradicts the condition of surprise. This question naturally brings into sharp persepctive what it means to be 'surprised.'",
    "Tolerance": "Nietzsche would likely enjoy this paradox, I believe. At any rate, the statement of interest in this paradox is that unlimited tolerance mus lead to the exstinction of tolerance if we tolerate the intolerant. Now, this is because if society is tolerant without limit, its ability to be tolerant will eventually be seized by the intolerant. Therefore, to maintain a tolerant society, one must be intolerant of intolerance. This naturally sparks discussion of the balance between tolerance and societal stability, raising questions about the limits of acceptance",

    "default": [
        "Indeed, indeed. But we are straying from the matter at hand: paradoxes.",
        "I would like to discuss paradoxes now.",
        "Hmm, interesting. Now, my dear pupil, are there any paradoxes you would like to further explore?",
        "That's intriguing. But what is still more intriguing? Paradoxes."
    ]
};

const introMessages = [
    "Greetings. My name is Praxidike, your personal professor of paradoxes. What paradox would you like to discuss today?",
    "I am Praxidike, professor of paradoxes. Is there a paradox I can elucidate for you, perhaps?",
    "Welcome, welcome. A bit tardy aren't you? Are you prepared to discuss paradoxes?",
    "Who is that there? Are you a student of paradoxes?",
    "Hello, hello! I am in a chatty mood, come mention a paradox we can discuss together."
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
    let botResponse = getRandomResponse();
    const lowerCaseMessage = message.toLowerCase(); // Ensure message is in lowercase for case-insensitive comparisons

    // Check for specific keywords and handle responses
    if (lowerCaseMessage.includes("hello")) {
        botResponse = botResponses["hello"];
    } else if (lowerCaseMessage.includes("how are you")) {
        botResponse = botResponses["how are you"];
    } else if (lowerCaseMessage.includes("bye")) {
        botResponse = botResponses["bye"];
        setTimeout(() => {
            window.close(); // Close window after saying goodbye (may not always work due to browser restrictions)
        }, 2000);
    } else if (lowerCaseMessage.includes("liar")) {
        botResponse = botResponses["liar"];
    } else if (lowerCaseMessage.includes("family")) {
        botResponse = botResponses["family"];
    } else if (lowerCaseMessage.includes("food")) {
        botResponse = botResponses["food"];
    } else if (lowerCaseMessage.includes("!")) {
        botResponse = botResponses["excitable"];
    } else if (lowerCaseMessage.includes("author")) {
        botResponse = botResponses["author"];
    } else if (lowerCaseMessage.includes("nietzsche")) {
        botResponse = botResponses["Nietzsche"];
    } else if (lowerCaseMessage.includes("book")) {
        botResponse = botResponses["book"];
    } else if (lowerCaseMessage.includes("kafka")) {
        botResponse = botResponses["Kafka"];
    } else if (lowerCaseMessage.includes("theseus") || lowerCaseMessage.includes("ship")) {
        botResponse = botResponses["Theseus"];
    } else if (lowerCaseMessage.includes("barber")) {
        botResponse = botResponses["Barber"];
    } else if (lowerCaseMessage.includes("ravens")) {
        botResponse = botResponses["Ravens"];
    } else if (lowerCaseMessage.includes("grandfather")) {
        botResponse = botResponses["Grandfather"];
    } else if (lowerCaseMessage.includes("zeno")) {
        botResponse = botResponses["Zeno"];
    } else if (lowerCaseMessage.includes("unexpected") || lowerCaseMessage.includes("hanging") || lowerCaseMessage.includes("surprise")) {
        botResponse = botResponses["Unexpected"];
    } else if (lowerCaseMessage.includes("tolerance")) {
        botResponse = botResponses["Tolerance"];
    } else {
        // Transformational responses
        if (lowerCaseMessage.includes("i want to")) {
            botResponse = transformIWantToStatement(message);
        } else if (lowerCaseMessage.includes("i want")) {
            botResponse = transformIWantStatement(message);
        } else if (lowerCaseMessage.includes("you") && lowerCaseMessage.includes("me")) {
            botResponse = transformYouMeStatement(message);
        } else if (lowerCaseMessage.includes("i") && lowerCaseMessage.includes("you")) {
            botResponse = transformIYouStatement(message);
        } else if (lowerCaseMessage.includes("i hate you")) {
            botResponse = transformIHateYouStatement(message);
        }
    }

    addMessage('Praxidike', botResponse);
}
function getRandomResponse() {
    const defaultResponses = botResponses["default"];
    const randomIndex = Math.floor(Math.random() * defaultResponses.length);
    return defaultResponses[randomIndex];
}

function transformIWantToStatement(statement) {
    statement = statement.trim();
    let restOfStatement = statement.substring(statement.indexOf("I want to") + 9).trim();
    return "What would it mean to you to be able to " + restOfStatement + "?";
}

function transformIWantStatement(statement) {
    statement = statement.trim();
    let restOfStatement = statement.substring(statement.indexOf("I want") + 6).trim();
    return "Would you really be happy if you had " + restOfStatement + "?";
}

function transformYouMeStatement(statement) {
    statement = statement.trim();
    let restOfStatement = statement.substring(statement.indexOf("you") + 3, statement.indexOf("me")).trim();
    return "What makes you think that I " + restOfStatement + " you?";
}

function transformIYouStatement(statement) {
    statement = statement.trim();
    let restOfStatement = statement.substring(statement.indexOf("I") + 1, statement.indexOf("you")).trim();
    return "Why do you " + restOfStatement + " me?";
}

function transformIHateYouStatement(statement) {
    return "Why do you hate me?";
}

    
  
