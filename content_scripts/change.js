browser.runtime.onMessage.addListener((message) => {
      document.body.style.setProperty("font-family", message.command, "important");
});
