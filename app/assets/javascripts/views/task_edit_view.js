Breath.Views.TaskEdit = Backbone.View.extend({
  template: JST['tasks/edit'],

  initialize: function(){

  },

  events: {

  },

  render: function(){
    var renderedContent = this.template({
      task: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
})
