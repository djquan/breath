Breath.Views.TaskIndex = Backbone.View.extend({
  template: JST['tasks/index'],

  initialize: function(){
    this.listenTo(this.collection, "add remove sync", this.render);
  },

  events: {
    'blur #form-task': 'submitTask',
    'click .task_list': 'showTask', 
    'click .complete-check': 'toggleComplete',
  },

  render: function(){
    var renderedContent = this.template({
      tasks: this.collection
    });

    this.$el.html(renderedContent);
    return this;
  },

  toggleComplete: function(event){
    var task = this.collection.get($(event.currentTarget).data('id'));
    var completedVar = task.get('completed') ? false : true
    task.save('completed', completedVar, {
      success: function(obj){
        Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
      }
    })
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
