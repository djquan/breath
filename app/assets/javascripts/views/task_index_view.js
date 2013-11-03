Breath.Views.TaskIndex = Backbone.View.extend({
  template: JST['tasks/index'],

  initialize: function(){
    this.listenTo(this.collection, "add remove sync", this.render);
  },

  events: {
    'blur #form-task': 'submitTask',
  },

  render: function(){
    var renderedContent = this.template({
      tasks: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  submitTask: function(event){
    var name = $(event.currentTarget).val();
    if (name === "") { return  };
    this.collection.create({
      name: name
    }, {
      success: function(obj){
        console.log(obj)
      }
    })
  }
})
