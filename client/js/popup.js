window.onload = function() {
  var connectButton = document.querySelector('#room-connect'),
      roomName = document.querySelector('#room-name')
  connectButton.addEventListener('click', function(e) {
    var bg = chrome.extension.getBackgroundPage();
    bg.connect();
  });
};