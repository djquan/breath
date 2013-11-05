Breath.Views.TeamProject = Backbone.View.extend({
  template: JST['teams/sidebar'],
  initialize: function(){

  },

  events: {
    'click .project-link': "showDetail",
  },

  showDetail: function(event){
    var selected = $(event.currentTarget).data("id")
    Backbone.history.navigate('teams/' + this.model.id + '/projects/' + selected, {trigger: true})
  },

  render: function(){
    renderedContent = this.template({
      team: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },
})
