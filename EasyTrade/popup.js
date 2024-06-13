// popup.js
document.addEventListener('DOMContentLoaded', function() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
      chrome.tabs.sendMessage(tabs[0].id, {action: "getInfo"}, function(response) {
        document.getElementById('info').innerText = response.info;
      });
    });
  });
  