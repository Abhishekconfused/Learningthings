document.addEventListener('DOMContentLoaded', () => {
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
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});