var triggerMouseEvent = function(element, mouseEvent) {mEvent = new MouseEvent(mouseEvent, {bubbles:true,cancelable:true,view:window, clientX:200}); element.dispatchEvent(mEvent)}

var triggerDownUpEvent = function(element) {
  mDownAtXPos = new MouseEvent('mousedown', {bubbles:true,cancelable:true,view:window,clientX:200})
  mUpAtXPos = new MouseEvent('mouseup', {bubbles:true,cancelable:true,view:window, clientX:200})
  element.dispatchEvent(mDownAtXPos);
  element.dispatchEvent(mUpAtXPos);
}

// This one works because it actually clicks in the fucking frame.
var triggerDownUpEvent = function(element) {
  mDownAtXPos = new MouseEvent('mousedown', {bubbles:true,cancelable:true,view:window,clientX:564})
  mUpAtXPos = new MouseEvent('mouseup', {bubbles:true,cancelable:true,view:window, clientX:564})
  element.dispatchEvent(mDownAtXPos);
  element.dispatchEvent(mUpAtXPos);
}

// This should give us the position of the element on the screen
key: "_extractRelativePos",
value: function(e) { // e = event.clientX
  var t = this.refs.progressBar.getBoundingClientRect()
    , n = t.right - t.left;
  return Math.max(0, Math.min((e - t.left) / n, 1))
}


// Code below is from the prettified spotify app.
key: "_extractRelativePos",
value: function(e) {
    var t = this.refs.progressBar.getBoundingClientRect()
      , n = t.right - t.left;
    return Math.max(0, Math.min((e - t.left) / n, 1))
}

return i(e, null, [{
  key: "setPosition",
  value: function(e) {
    s(this.getInstance(), "position", e)
  }
}

// 23044
key: "seek",
value: function(e) {
    this.props.dispatch(h.seek(e * this.props.trackDuration))
}

// 22993
key: "dragEnd",
value: function(e) {
  var t = this;
  setTimeout(function() {
      t.state.isDragging && (t.rafHandler.subscribe(),
      t.setState({
          isDragging: !1,
          dragPosition: 0
      }))
  }, 1e3),
  this.seek(e)
}

// 10033
key: "onMouseUp",
value: function(e) {
  e.stopPropagation(),
  this.setState({
      isDragging: !1
  }),
  this.props.onDragEnd && this.props.onDragEnd(this._extractRelativePos(e.clientX))
}

// 30012
t.default = function(e) {
  return function(t) {
    return function(n) {
      var r = t(n)
        , i = e.getState()
        , o = i.session;
      b = i.playback && i.playback.device && i.playback.player && i.playback.device.id;
      var s = null;
      switch (n.type) {
      case "LOAD":
      case "LOGIN_SUCCESS":
          !g && o.accessToken && (g = C(e),
          e.dispatch(c.requestConnectDevices()));
          break;
      case a.types.PLAY_PLAYLIST:
      case a.types.PLAY_ALBUM:
      case a.types.PLAY_ARTIST:
      case a.types.START_RADIO:
          var l = n.uri;
          if (s = i.playback && i.playback.player && i.playback.player.context.uri,
          l === s)
              e.dispatch(a.togglePlay());
          else {
              w(l),
              e.dispatch(u.logPlay(l));
              var p = P(l, i);
              p && e.dispatch(d.storeContext(p.name, p.uri))
          }
          break;
      case a.types.PLAY_TRACK:
          w(n.contextURI, n.index),
          e.dispatch(u.logPlay(n.contextURI, n.index));
          var f = P(n.contextURI, i);
          f && e.dispatch(d.storeContext(f.name, f.uri));
          break;
      case a.types.PLAY_TRACKS:
          O(n.tracks, n.contextURI, n.index),
          e.dispatch(u.logPlay(n.contextURI, n.index));
          break;
      case a.types.STATUS_UPDATE:
          if (!E) {
              var h = n.playerState && n.playerState.context && n.playerState.context.metadata && n.playerState.context.metadata.name
                , y = n.playerState && n.playerState.context && n.playerState.context && n.playerState.context.uri;
              if (h && y) {
                  var _ = P(y, i);
                  _ && e.dispatch(d.storeContext(_.name, _.uri))
              }
          }
          break;
      case a.types.TOGGLE_PLAY:
          g.togglePlay();
          break;
      case a.types.PREVIOUS:
          g.previousTrack();
          break;
      case a.types.NEXT:
          g.nextTrack();
          break;
      case a.types.SET_SHUFFLE:
          g.setShuffle(n.shuffle);
          break;
      case a.types.SET_REPEAT:
          g.setRepeatMode(n.repeat);
          break;
      case a.types.SEEK:
          g.seek(n.position);
          break;
      case a.types.SET_VOLUME:
          g.setVolume(n.volume);
          break;
      case a.types.SET_ACTIVE_DEVICE:
          g.transfer(n.id);
          break;
      case c.types.REQUEST_CONNECT_DEVICES:
          R(e)
      }
      return r // <-- this is the bit.
    }
  }
}

// 43024
r.prototype.seek = function(e, t) {
  return !this._localPlayback || t && "@local" !== t ? this._controller.seek(e, t) : this._onStreamerConnect().then(this._streamer.seek.bind(this._streamer, e))
}

// 42959
r.prototype._onStreamerConnect = function() {
  return this._deferredStreamer.promise
}