document.addEventListener('DOMContentLoaded', loadMessages);
document.getElementById('send-button').addEventListener('click', sendMessage);

function sendMessage() {
    const input = document.getElementById('message-input');
    const message = input.value.trim();
    if (message !== '') {
        displayMessage(message);
        saveMessage(message);
        input.value = '';
    }
}

function displayMessage(message) {
    const chatBox = document.getElementById('chat-box');
    const messageElement = document.createElement('div');
    messageElement.classList.add('chat-message');
    messageElement.textContent = message;
    chatBox.appendChild(messageElement);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function saveMessage(message) {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.push(message);
    localStorage.setItem('messages', JSON.stringify(messages));
}

function loadMessages() {
    let messages = JSON.parse(localStorage.getItem('messages')) || [];
    messages.forEach(message => displayMessage(message));
}
