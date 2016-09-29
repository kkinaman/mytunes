var SongRouter = Backbone.Router.extend({

  routes: {
    'song/:query': 'songSearch'
  },

  initialize: function() {
    Backbone.history.start();
  },

  songSearch: function(query) {
    
  }

});