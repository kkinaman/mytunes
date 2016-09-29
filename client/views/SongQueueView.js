// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  tagName: 'table',

  initialize: function() {
    this.render();
    this.collection.on('add remove', function() {
      this.render();
      // console.log('i am never called');
    }.bind(this), this);
    //had to separate add and remove with a space for this to work
    // this.collection.on('remove', function() {
    //   this.render();
    //   // console.log('i too shouldnt be called');
    // }.bind(this), this);
  },

  // events: {
  //   'add': 'render'
  // },

  render: function() {
    // console.log('rendering in queue');
    // debugger;
    this.$el.children().detach();
    // console.log(this.$el);

    this.$el.html('<th>Queue</th>').append(
      this.collection.map(function(song) {
        // console.log('test');
        return new SongQueueEntryView({model: song}).render();
      })
    );
  }

});
