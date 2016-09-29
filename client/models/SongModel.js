// SongModel.js - Defines a backbone model class for songs.
var SongModel = Backbone.Model.extend({

  initialize: function() {
    this.attributes.playCount = 0;
  },

  enqueue: function() {
    this.trigger('enqueue', this);
  },

  addToTop: function() {
    this.trigger('addToTop', this);
  },

  dequeue: function() {
    this.trigger('dequeue', this);
  },

  ended: function() {
    this.trigger('ended', this); 
    this.attributes.playCount++;
  },

  play: function() {
    // Triggering an event here will also trigger the event on the collection
    this.trigger('play', this);
  }

});
