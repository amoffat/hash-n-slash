chrome.omnibox.onInputEntered.addListener(function(text) {
    var url = hashIt(text);
    chrome.tabs.update({url: url, active: true});
});
