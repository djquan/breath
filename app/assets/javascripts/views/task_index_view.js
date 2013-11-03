Breath.Views.TaskIndex = Backbone.View.extend({
  template: JST['tasks/index'],

  initialize: function(){
    this.listenTo(this.collection, "add remove sync", this.render);
  },

  events: {
    'blur #form-task': 'submitTask',
    'click .task_list': 'showTask', 
  },

  render: function(){
    var renderedContent = this.template({
      tasks: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  showTask: function(event){
    var destination = $(event.currentTarget).data('id');
    Backbone.history.navigate('tasks/' + destination, {trigger: true})
  },

  submitTask: function(event){
    var name = $(event.currentTarget).val();
    if (name === "") { return  };
    this.collection.create({
      name: name
    }, {
      success: function(obj){
        Backbone.history.navigate('/tasks/' + obj.id, {trigger: true})
      }
    })
  }
})
