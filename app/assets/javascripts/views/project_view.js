Breath.Views.ProjectView = Backbone.View.extend({
  template: JST['projects/detail'],
  initialize: function(){

  },

  events: function(){
  },

  render: function(){
    var renderedContent = this.template({
      project: this.model
    });
    this.$el.html(renderedContent);
    return this;
  },
})
