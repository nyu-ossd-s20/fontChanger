browser.runtime.onMessage.addListener((message) => {
    const tags = document.getElementsByTagName("*");
    for (let tag of tags) {
      tag.style.setProperty("font-family", message.command, "important");
    }
});
