// Set up context menu tree at install time.
chrome.runtime.onInstalled.addListener(function() {
  var id = chrome.contextMenus.create({
  			"title": "Search '%s' on Github", 
  			"contexts" : ["selection"],
  			"id": "searchGithub"
  		});
});

// The onClicked callback function.
function onClickHandler(info, tab) {
	chrome.tabs.create({
    "url": "https://github.com/search?q=" + info.selectionText
  })
};

chrome.contextMenus.onClicked.addListener(onClickHandler);