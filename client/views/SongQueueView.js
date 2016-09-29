// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add, remove', this.render, this);
  },

  events: {
    'add': 'render'
  },

  render: function() {
    console.log('rendering in queue');
    // debugger;
    this.$el.children().detach();
    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
