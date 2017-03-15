var spotify = {
  setElements: function(){
    this['progressBarDiv'] = document.querySelector('.progress-bar');
    this['progressBar'] = document.querySelector('.middle-align.progress-bar__bg');
    this['progressSlider'] = document.querySelector('.middle-align.progress-bar__slider');
    this['playButton'] = document.querySelector('button[title="Play"]');
    this['pauseButton'] = document.querySelector('button[title="Pause"]');
  },

  _triggerMouseEvent: function(eventName, elementNode, xPosition, yPosition) {
    var evtOptions = {bubbles:true,cancelable:true,view:window,
      clientX:xPosition || 0,
      clientY:yPosition || 0};
    var mEvent = new MouseEvent(eventName, evtOptions);
    elementNode.dispatchEvent(mEvent);
  },

  _mouseDownAndUpOnElement: function(element, xPosition, yPosition) {
    this._triggerMouseEvent('mousedown', element, xPosition, yPosition);
    this._triggerMouseEvent('mouseup', element, xPosition, yPosition);
  },

  _setSeek: function(xPosition) {
    this.setElements();
    this._mouseDownAndUpOnElement(this.progressBar, xPosition);
  },

  play: function() {
    this.setElements();
    this.playButton.click();
  },

  stop: function() {
    this.setElements();
    this.pauseButton.click();
  },

  pause: function() {
    this.setElements();
    this.stop();
  },

  setSeekByPixel: function(pixelCount) {
    this.setElements();
    var bindingRect = this.progressBar.getBoundingClientRect(),
        relativeLeft = bindingRect.left,
        whereToClick = relativeLeft + pixelCount;
    this._setSeek(whereToClick);
  }
}
