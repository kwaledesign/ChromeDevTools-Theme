var xhr = new XMLHttpRequest();
xhr.open("GET", "css/styles.css", false);
xhr.send();
chrome.devtools.panels.applyStyleSheet(xhr.responseText);
