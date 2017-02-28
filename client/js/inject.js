(function() {
  var player = document.querySelector("#app-player").contentWindow.document;
  var progressBar = player.querySelector("#bar-click");
  var wrapper = player.querySelector("#wrap");

  triggerMouseEvent = function(node, eventType) {
    var clickEvent = player.createEvent ('MouseEvents');
    clickEvent.initEvent(eventType, true, true);
    node.dispatchEvent(clickEvent);
  }

  mouseDownThenUp = function(node) {
    triggerMouseEvent(node, "mousedown");
    triggerMouseEvent(node, "mouseup");
  }

  addInjectedStuffs = function(element) {
    var div = player.createElement('div');
	  div.style.position = 'relative';
	  div.style.top = 0;
	  div.style.right = 0;
    div.style['z-index'] = 10;
    div.style.width = '210px';
    div.style.height = '25px';
	  wrapper.insertBefore(div, wrapper.firstChild);
    addTriggerButton(div);
  }

  addTriggerButton = function(div) {
    var theButton = player.createElement('button');
    theButton.textContent = 'Trigger Man';
    theButton.style.width = '210px';
    theButton.id = 'triggerMan';
    div.appendChild(theButton);
    theButton.addEventListener("click", function() {
      mouseDownThenUp(progressBar);
    });
  }

  this.addInjectedStuffs(player);

})();

