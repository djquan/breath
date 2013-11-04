Breath.Views.TaskIndex = Backbone.View.extend({
  template: JST['tasks/index'],

  initialize: function(){
    this.listenTo(this.collection, "add remove change sync", this.render);
    this.listenTo(Breath.user, 'sync', this.render)
  },

  events: {
    'blur #form-task': 'submitTask',
    'click .task_list': 'showTask', 
    'click .complete-check': 'toggleComplete',
  },

  render: function(){
    var renderedContent = this.template({
      tasks: this.collection,
      project: new Breath.Models.Project({name: "All", id: 0})
    });

    this.$el.html(renderedContent);
    return this;
  },
// I really need to refactor this.
  toggleComplete: function(event){
    var taskId = $(event.currentTarget).data('id')
    var task = this.collection.get(taskId);

    var completedVar = task.get('completed') ? false : true
    task.save('completed', completedVar, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')) {
          var project = Breath.user.projects().get(obj.get('project_id'));
          project.tasks().get(taskId).save('completed', completedVar)
          Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
        } else {
          Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
        }
      }
    })
  },

  showTask: function(event){
    var destination = $(event.currentTarget).data('id');
    var obj = this.collection.get(destination);
    if (obj.get('project_id') !== 0 && obj.get('project_id')) {
      var project = Breath.user.projects().get(obj.get('project_id'));
      Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
    } else {
      Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
    }
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
