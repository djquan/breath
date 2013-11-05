Breath.Views.TeamProject = Backbone.View.extend({
  template: JST['teams/sidebar'],
  initialize: function(){

  },

  events: {
  },

  render: function(){
    renderedContent = this.template({
      team: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },
})
