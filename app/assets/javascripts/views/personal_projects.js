Breath.Views.PersonalProjects = Backbone.View.extend({
  template: JST['projects/personal'],

  initialize: function(){
    this.listenTo(this.collection, "add remove sync", this.render);
  },

  events: {
    'blur #form-personal': 'submitPersonal',
    'keyup #form-personal': 'blur'
  },

  blur: function(event){
    if (event.which === 13) { event.currentTarget.blur() }
  },

  render: function(){
    var renderedContent = this.template({
      projects: this.collection
    })

    this.$el.html(renderedContent)
    return this
  },

  submitPersonal: function(event){
    var name = $(event.currentTarget).val();
    if (name === "") { return  };
    this.collection.create({
      name: name
    }, {
      success: function(obj){
        Backbone.history.navigate('/projects/' + obj.id, {trigger: true})
      }
    })
  }
})
