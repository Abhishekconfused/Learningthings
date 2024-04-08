document.addEventListener('DOMContentLoaded', () => {
    const recentChats = document.querySelector('.recent-chats');
    const chatArea = document.querySelector('.chat-area');
    const messageForm = document.querySelector('.message-form');
    const messageInput = document.querySelector('.message-input');
    const chatContent = document.querySelector('.chat-content');

    const recentChat1 = createChat({
        name: 'John Doe',
        message: 'Hey, how are you?',
        time: '10:30 AM',
        unread: false,
    });
    const recentChat2 = createChat({
        name: 'Jane Smith',
        message: 'Hi, I have a question for you.',
        time: '9:15 AM',
        unread: true,
    });
    recentChats.appendChild(recentChat1);
    recentChats.appendChild(recentChat2);

    const chatHeader = createChatHeader({
        name: 'John Doe',
        online: true,
    });
    chatArea.querySelector('.chat-header').appendChild(chatHeader);

    const chatMessage1 = createChatMessage({
        name: 'You',
        message: 'Hello, John! How can I help you?',
        type: 'outgoing',
    });
    const chatMessage2 = createChatMessage({
        name: 'John Doe',
        message: 'Hi, I was wondering if you could help me with my project.',
        type: 'incoming',
    });
    chatContent.appendChild(chatMessage1);
    chatContent.appendChild(chatMessage2);

    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const message = messageInput.value.trim();

        if (message.length > 0) {
            addMessage(message, 'outgoing');
            messageInput.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    });

    function createChat(data) {
        const chatElement = document.createElement('div');
        chatElement.classList.add('recent-chat');

        const nameElement = document.createElement('h3');
        nameElement.textContent = data.name;
        chatElement.appendChild(nameElement);

        const messageElement = document.createElement('p');
        messageElement.textContent = data.message;
        chatElement.appendChild(messageElement);

        const timeElement = document.createElement('span');
        timeElement.textContent = data.time;
        chatElement.appendChild(timeElement);

        if (data.unread) {
            const unreadDot = document.createElement('span');
            unreadDot.textContent = '•';
            unreadDot.style.color = '#dcf8c6';
            chatElement.insertBefore(unreadDot, chatElement.firstChild);
        }

        return chatElement;
    }

    function createChatHeader(data) {
        const chatHeaderElement = document.createElement('div');
        chatHeaderElement.classList.add('chat-header-inner');

        const nameElement = document.createElement('h2');
        nameElement.textContent = data.name;
        chatHeaderElement.appendChild(nameElement);

        if (data.online) {
            const onlineIndicator = document.createElement('span');
            onlineIndicator.textContent = 'Online';
            chatHeaderElement.appendChild(onlineIndicator);
        }

        return chatHeaderElement;
    }

    function createChatMessage(data) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message', data.type);

        const bubbleElement = document.createElement('div');
        bubbleElement.classList.add('bubble');

        const nameElement = document.createElement('span');
        nameElement.classList.add('name');
        nameElement.textContent = data.name;
        bubbleElement.appendChild(nameElement);

        const messageTextElement = document.createElement('span');
        messageTextElement.classList.add('message-text');
        messageTextElement.textContent = data.message;
        bubbleElement.appendChild(messageTextElement);

        messageElement.appendChild(bubbleElement);
        return messageElement;
    }

    function addMessage(text, type) {
        const message = createChatMessage({
            name: 'You',
            message: text,
            type,
        });
        chatContent.appendChild(message);
        chatContent.scrollTop = chatContent.scrollHeight;
    }
});