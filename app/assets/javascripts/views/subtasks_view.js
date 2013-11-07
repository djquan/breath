Breath.Views.SubtaskView = Backbone.View.extend({
  template: JST['tasks/subtasks'],

  initialize: function(){

  },

  events: {

  },

  render: function(){
    var renderedContent = this.template({
      task: this.model,
      subtasks: this.model.subtasks();
    })

    this.$el.html(renderedContent);
    return this;
  }
})
