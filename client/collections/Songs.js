// Songs.js - Defines a backbone collection class for songs.
var Songs = Backbone.Collection.extend({

  model: SongModel,

  initialize: function () {
    $.ajax({
      url: 'https://api.parse.com/1/classes/songs/',
      type: 'GET',
      success: (data) => {
        data.results.forEach( (song) => {
          this.add(song);
        });
      },
      error: function(e) {
        console.log('Data not received.');
      }
    });
  }

});