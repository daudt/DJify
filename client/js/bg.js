// chrome.browserAction.onClicked.addListener(function (tab) {
// 	// for the current tab, inject the "inject.js" file & execute it
// 	chrome.tabs.executeScript(tab.ib, {
// 		file: 'js/inject.js'
// 	});
// });

var socket = io("http://127.0.0.1:3000");
var tabIDToUse = 0;

socket.on('open', function(e) {
	chrome.tabs.update(tabIDToUse, {url: "https://open.spotify.com/track/30vh2LXU2A9ccd0rgFYHpd?play=true", autoDiscardable: false, active: true}, function(e) {
		console.log('Page is loaded');
	});
});

socket.on('pause', function(data) {
	console.log('I got the pause command, and some stupid data: '+ data);
});

socket.on('connect', function(e) {
	setTabToUse();
});

function setTabToUse() {
	chrome.tabs.query({url: "https://*.spotify.com/*"}, function(tabResults){
		if(tabResults.length > 0) {
			tabIDToUse = tabResults[0].id;
		} else {
			chrome.tabs.create({url: "https://open.spotify.com/"}, function(result) {
				tabIDToUse = result.id;
			});
		}
	});
}