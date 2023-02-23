chrome.omnibox.onInputEntered.addListener(
  function(text) {
    chrome.tabs.create({url: "https://chat.openai.com/chat"});
    chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
      if (changeInfo.status === 'complete' && tab.url === "https://chat.openai.com/chat") {
        chrome.tabs.sendMessage(tab.id, {message: "run_script", text: text });
      }
    });
  });
