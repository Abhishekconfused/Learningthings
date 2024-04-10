document.addEventListener('DOMContentLoaded', () => {
    const messageForm = document.querySelector('.message-form');
    const messageInput = document.querySelector('.message-input');
    const chatContent = document.querySelector('.chat-content');
    const likeButton = document.querySelector('.like-button');
    const likeCount = document.querySelector('.like-count');
    const likeHeartContainer = document.querySelector('.like-heart-container');
    const newReelButton = document.querySelector('.new-reel-button');
    const newChatButton = document.querySelector('.new-chat-button');
    const recentChats = document.querySelector('.recent-chats');

    let likeCountNum = 0;

    // Add message functionality
    messageForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const message = messageInput.value.trim();
        if (message.length > 0) {
            addMessage(message, 'outgoing');
            messageInput.value = '';
            chatContent.scrollTop = chatContent.scrollHeight;
        }
    });

    // Add message function
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

    // Add like functionality
    likeButton.addEventListener('click', () => {
        likeCountNum++;
        likeCount.textContent = likeCountNum;
        likeHeartContainer.classList.add('active');
        setTimeout(() => {
            likeHeartContainer.classList.remove('active');
        }, 500);
    });

    // Add new reel functionality
    newReelButton.addEventListener('click', () => {
        const reel = document.createElement('video');
        reel.src = '1.mp4';
        reel.controls = true;
        reel.width = '180';
        reel.height = '240';
        reel.classList.add('reel');
        chatContent.appendChild(reel);
        chatContent.scrollTop = chatContent.scrollHeight;
    });

    // Add new chat functionality
    newChatButton.addEventListener('click', () => {
        const recentChat = document.createElement('div');
        recentChat.classList.add('recent-chat');

        const profilePicture = document.createElement('img');
        profilePicture.src = 'https://api.dicebear.com/5.x/avataaars/svg?seed=NewChat';
        profilePicture.alt = 'New chat profile picture';
        profilePicture.classList.add('profile-picture');
        recentChat.appendChild(profilePicture);

        const name = document.createElement('div');
        name.classList.add('name');
        name.textContent = 'New Chat';
        recentChat.appendChild(name);

        recentChats.insertBefore(recentChat, recentChats.firstChild);
    });
});