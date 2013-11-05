Breath.Views.TeamDetail = Backbone.View.extend({
  template: JST['teams/detail'],

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
  }
})
