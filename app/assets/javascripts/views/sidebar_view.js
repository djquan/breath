Breath.Views.SidebarView = Backbone.View.extend({
  template: JST['sidebar'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync", this.render);
  },

  events: {
    'click .task_index': "showTaskIndex"
  },

  showTaskIndex: function(event){
    Backbone.history.navigate('', {trigger: true})
  },

  render: function(){
    var that = this;
    var renderedContent = this.template({
      user: this.model
    });

    var personalProjects = new Breath.Views.PersonalProjects({
      collection: this.model.projects()
    });

    this.$el.html(renderedContent);

    this.model.teams().each(function(team){
      var teamPage = new Breath.Views.TeamProject({
        model: team
      });

      that.$el.append(teamPage.render().$el);
    }),

    this.$el.append(personalProjects.render().$el);
    return this;
  }
})
