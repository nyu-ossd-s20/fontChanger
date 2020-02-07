browser.runtime.onMessage.addListener((message) => {
    document.body.style.fontFamily = message.command;
});
