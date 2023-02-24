// Listen for messages from content script
chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    console.log(message);
    let msgText = message.message;
    let title = `copyGPT-notification-${Date.now()}`
    switch (message.type) {
        case 'copy':
            chrome.notifications.create(`copyGPT-notification-${Date.now()}`, {
                type: 'basic',
                iconUrl: '/copy.png',
                title: 'CopyGPTMarkdown',
                message: msgText,
                priority: 2
            })    

            const content = msgText.replace(/\n/g, '\n> ');
            const markdown = `> ${content.replace(/\n/g, '\n> ')}`;
            console.log(markdown);
            break;
        case 'notification':
            chrome.notifications.create(`copyGPT-notification-${Date.now()}`, {
                type: 'basic',
                iconUrl: '/copy.png',
                title: 'CopyGPTMarkdown',
                message: "message from content script",
                priority: 2
            })    
        default:
            break;

    }
});

  