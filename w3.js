const messageForm = document.querySelector('.message-form');
const messageInput = document.querySelector('.message-input');
const chatContent = document.querySelector('.chat-content');

messageForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const message = messageInput.value.trim();

    if (message.length > 0) {
        addMessage(message, 'outgoing');
        messageInput.value = '';
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});

function addMessage(text, type) {
    const message = document.createElement('div');
    message.classList.add('message', type);

    const bubble = document.createElement('div');
    bubble.classList.add('bubble');

    const messageText = document.createElement('span');
    messageText.classList.add('message-text');
    messageText.textContent = text;
    bubble.appendChild(messageText);

    message.appendChild(bubble);
    chatContent.appendChild(message);
}

function scrollToBottom() {
    chatContent.scrollTop = chatContent.scrollHeight;
}

function addReel(src) {
    const reel = document.createElement('div');
    reel.classList.add('reel');

    const video = document.createElement('video');
    video.src = src;
    video.controls = true;
    video.width = '100%';
    video.borderRadius = '12px';

    reel.appendChild(video);
    chatContent.appendChild(reel);

    scrollToBottom();
}

// Example usage:
addReel('reel1.mp4');
addReel('reel2.mp4');