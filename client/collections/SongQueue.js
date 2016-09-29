// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {
    this.on('add', function() {
      // console.log('add called');
      if (this.length === 1) {
        this.playFirstSong();
      }
    });
    this.on('ended', function() {
      // console.log('i am called');
      this.shift();
      if (this.length > 0) {
        this.playFirstSong();
      }
    });

    this.on('dequeue', function(song) {
      this.remove(song);
    });
    //the following also works because collections know which song triggered the event
    // this.on('dequeue', this.remove, this);
  },

  playFirstSong: function() {
    this.at(0).play();
  }

});