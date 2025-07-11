const sentences = [
    'Jackdaws love my big sphinx of quartz',
    'The quick brown fox jumps over the lazy dog',
    'Pack my box with five dozen liquor jugs',
    'Bright vixens jump; dozy fowl quack',
    'Student send the message to his crush'
];

let sentence = document.querySelector('.sentence');
let textarea = document.getElementById('area');
let timerElement = document.getElementById('timer');
let errorsElement = document.getElementById('errors');
let accuracyElement = document.getElementById('accuracy');

let currentSentence = "";
let timer = 0;
let interval = null;
let errors = 0;
function startGame() {
    errors = 0;
    timer = 0;
    clearInterval(interval);

    timerElement.textContent = '0';
    textarea.value = '';
    errorsElement.textContent = 'Errors: 0';
    accuracyElement.textContent = 'Accuracy: 0%';
    textarea.disabled = false;
    textarea.focus();

    let randomSentence = sentences[Math.floor(Math.random() * sentences.length)];
    sentence.textContent = randomSentence;
    currentSentence = randomSentence;

    interval = setInterval(updateTimer, 1000);
}

function updateTimer() {
    timer++;
    timerElement.textContent = timer;
    handleTyping();
}

function handleTyping() {
    const typedText = textarea.value;
    const original = currentSentence.substring(0, typedText.length);

    if (typedText === currentSentence) {
    clearInterval(interval);
    textarea.disabled = true;
    alert("Done! Time: " + timer + " seconds, Errors: " + errors);
    return;
    }

    if (typedText !== original) {
    errors = getErrors(typedText, currentSentence);
    }

    const accuracy = Math.max(0, Math.floor(((typedText.length - errors) / Math.max(typedText.length, 1)) * 100));
    errorsElement.textContent = 'Errors: ' + errors;
    accuracyElement.textContent = 'Accuracy: ' + accuracy + '%';
}

function getErrors(typedText, originalText) {
    let err = 0;
    for (let i = 0; i < typedText.length; i++) {
if (typedText[i] !== originalText[i]) {
        err++;
}
    }
    return err;
}


textarea.addEventListener('input', handleTyping);
