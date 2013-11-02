Breath.Views.SidebarView = Backbone.View.extend({
  template: JST['sidebar'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync", this.render);
  },

  events: {
    
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
