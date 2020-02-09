function updateFont(tabs) {
  const form = document.getElementById('font');
  form.addEventListener('submit', onSubmit);
  const list = document.getElementById("dropdown");
  let font;
  function onSubmit(tabs) {
    font = list.options[list.selectedIndex].value;
    browser.tabs.query({active: true, currentWindow: true})
        .then(change)
  }

  function change(tabs) {
    browser.tabs.sendMessage(tabs[0].id, {
      command: font,
    });
  }

  console.error(font);
}

browser.tabs.executeScript({file: "/content_scripts/change.js"}).then(updateFont);
