window.onload = function() {
  var theButton = document.querySelector("button");
  theButton.addEventListener('click', function(e) {
    var socket = chrome.extension.getBackgroundPage().socket;
    socket.emit('hello', {data: true, stupid: false});
  });
};