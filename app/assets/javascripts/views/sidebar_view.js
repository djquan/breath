Breath.Views.SidebarView = Backbone.View.extend({
  template: JST['sidebar'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync", this.render);
    this.listenTo(this.model.teams(), "add remove sync", this.render);
  },

  events: {
    'click .task_index': "showTaskIndex",
    'click .project-link': "showDetail",
    'blur #new-team': "addTeam"
  },

  showDetail: function(event){
    var selected = $(event.currentTarget).data("id")
    Backbone.history.navigate('projects/' + selected, {trigger: true})
  },

  showTaskIndex: function(event){
    Backbone.history.navigate('', {trigger: true})
  },

  addTeam: function(event){
    var teamName = $(event.currentTarget).val();
    if (teamName === ""){ return }
    this.model.teams().create({
      name: teamName }, {
      success: function(obj){
        Breath.user.fetch({
          success: function(){
            Backbone.history.navigate('teams/' + obj.id, {trigger: true})
          }
        });
      }
    });
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
        model: team,
        collection: team.projects()
      });

      that.$el.append(teamPage.render().$el);
    }),

    this.$el.append(personalProjects.render().$el);
    return this;
  }
})
