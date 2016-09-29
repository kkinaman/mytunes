// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add remove', function() {
      this.render();
    }.bind(this), this);

  },

  render: function() {
    this.$el.children().detach();

    this.$el.html('<tr><th colspan="3">Queue</th></tr><tr class="subtitles"><th>Artist</th><th>Title</th></tr>').append(
      this.collection.map(function(song) {
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
