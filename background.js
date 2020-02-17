chrome.browserAction.onClicked.addListener(function (tab) {
    console.log("fire");
    chrome.tabs.executeScript(null, {
        file: "jquery-2.2.0.min.js"
    });
    chrome.tabs.executeScript(null, {
        file: "testScript.js"
    });
});