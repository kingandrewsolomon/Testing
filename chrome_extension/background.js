chrome.browserAction.onClicked.addListener(function(tab){
    let message = {
        "txt":"summarize"
    }
    chrome.tabs.sendMessage(tab.id, message);
})