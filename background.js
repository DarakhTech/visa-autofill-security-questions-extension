chrome.runtime.onMessage.addListener(function(message, sender, sendResponse) {
    if (message.action == "fillInputs") {
      chrome.scripting.executeScript({
        target: {tabId: sender.tab.id},
        function: fillInputs
      });
    }
  });
  
  
  