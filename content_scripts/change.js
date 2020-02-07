browser.runtime.onMessage.addListener((message) => {
    var tags = document.getElementsByTagName("*");
    for(let i = 0; i < tags.length; i++){
      tags[i].style.setProperty("font-family", message.command, "important");
    }
});
