// PlayerView.js - Defines a backbone view class for the music player.
var PlayerView = Backbone.View.extend({

  // HTML5 (native) audio tag is being used
  // see: https://developer.mozilla.org/en-US/docs/Web/Guide/HTML/Using_HTML5_audio_and_video
  el: '<audio controls autoplay />',

  initialize: function() {
    // this.model.on('play', function() {
    // });
  },

  events: {
    'ended': 'end',
  },

  end: function () {
    this.model.ended();
  },

  setSong: function(song) {
    this.model = song;
    this.render();
  },

  render: function() {
    $('#songName').text(this.model.get('title')); 
    return this.$el.attr('src', this.model ? this.model.get('url') : '');
  }

});
