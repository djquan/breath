Breath.Views.SidebarView = Backbone.View.extend({
  template: JST['sidebar'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync", this.render);
  },

  events: {
    'click .project-link': "showDetail",
    'click .task_index': "showTaskIndex"
  },

  showDetail: function(event){
    var selected = $(event.currentTarget).data("id")
    Backbone.history.navigate('projects/' + selected, {trigger: true})
  },

  showTaskIndex: function(event){
    Backbone.history.navigate('', {trigger: true})
  },

  render: function(){
    var renderedContent = this.template({
      user: this.model
    });

    var personalProjects = new Breath.Views.PersonalProjects({
      collection: this.model.projects()
    });
    this.$el.html(renderedContent);
    this.$el.append(personalProjects.render().$el);
    return this;
  }
})
