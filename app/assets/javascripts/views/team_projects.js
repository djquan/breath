Breath.Views.TeamProject = Backbone.View.extend({
  template: JST['teams/sidebar'],
  initialize: function(){
    this.listenTo(this.collection, "add remove sync", this.render);
  },

  events: {
    'blur #form-team': 'submitPersonal',
  },

  render: function(){
    renderedContent = this.template({
      team: this.model
    });

    this.$el.html(renderedContent);
    return this;
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
