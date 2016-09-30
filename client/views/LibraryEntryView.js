// LibraryEntryView.js - Defines a backbone view class for the entries that will appear within the library views. These will be inserted using the "subview" pattern.
var LibraryEntryView = Backbone.View.extend({

  tagName: 'tr',

  attributes: {
    'draggable': true,
    // 'ondragstart': 'drag'
  },

  template: _.template('<td><%= artist %></td><td><%= title %> </td><td><%= playCount %></td>'),

  events: {
    'click': function() {
      this.model.enqueue();
      // this.model.play();
    },
    'dragstart': function(ev) {
      console.log(ev);
      this.drag(ev);
    }
  },

  drag: function(event) {
    debugger;
    event.dataTransfer.setData('text', ev.target.id);
    console.log(event.dataTransfer.getData('text'));
  },

  render: function() {
    return this.$el.html(this.template(this.model.attributes));
  }

});
