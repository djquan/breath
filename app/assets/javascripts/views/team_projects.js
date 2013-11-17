Breath.Views.TeamProject = Backbone.View.extend({
  template: JST['teams/sidebar'],
  initialize: function(){
    this.listenTo(this.collection, "add remove sync", this.render);
  },

  events: {
    'blur #form-team': 'submitPersonal',
    'click .sidebar-header': 'showTeamPage',
    'keyup #form-team': 'blur'
  },

  blur: function(event){
    if (event.which === 13) { event.currentTarget.blur() }
  },

  render: function(){
    renderedContent = this.template({
      team: this.model
    });

    this.$el.html(renderedContent);
    return this;
  },

  showTeamPage: function(){
    Backbone.history.navigate('/teams/' + this.model.id, {trigger: true})
  },

  submitPersonal: function(event){
    var name = $(event.currentTarget).val();
    if (name === "") { return  };
    this.collection.create({
      name: name,
      team_id: this.model.id
    }, {
      success: function(obj){
        Breath.user.projects().add(obj, {parse: true});
        Backbone.history.navigate('/projects/' + obj.id, {trigger: true})
      }
    })
  }
})
