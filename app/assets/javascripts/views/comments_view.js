Breath.Views.CommentView = Backbone.View.extend({
  template: JST['tasks/comments'],

  initialize: function(){

  },

  events: {

  },

  render: function(){
    var renderedContent = this.template({
      comments: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
})
