document.addEventListener('DOMContentLoaded', function() {
    // var fillButton = document.getElementById('fillButton');
    // fillButton.addEventListener('click', function() {
        chrome.tabs.query({ active: true, currentWindow: true }, function(tabs) {
            if (tabs && tabs[0]) {
                var activeTab = tabs[0];
                if (activeTab.url.includes('.html')) {
                    chrome.scripting.executeScript({
                        target: { tabId: activeTab.id, allFrames: true },
                        files: ['contentScript.js'],
                    }).then(() => {
                        console.log('Script executed successfully.');
                    }).catch(err => {
                        console.error('Script execution failed:', err);
                    });
                } else {
                    console.log('Active tab is not on the specific website.');
                }
            } else {
                console.log('No active tab found.');
            }
        });
    // });
});
