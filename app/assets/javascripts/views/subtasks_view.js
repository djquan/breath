Breath.Views.SubtaskView = Backbone.View.extend({
  template: JST['tasks/subtasks'],

  initialize: function(){
    this.listenTo(this.collection, "add remove change sync", this.render);
    this.listenTo(this.model, "add remove sync change", this.render);
  },

  events: {
    'click .subtask_list': 'showTask', 
    'click .subcomplete-check': 'toggleComplete',
    'blur #form-task': 'submitSubtask',
  },

  showTask: function(event){
    var destination = $(event.currentTarget).data('id');
    var obj = Breath.user.tasks().get(destination);
    if (obj.get('project_id') !== 0 && obj.get('project_id')) {
      var project = Breath.user.projects().get(obj.get('project_id'));
      Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
    } else {
      Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
    }
  },

  submitSubtask: function(event){
    var name = $(event.currentTarget).val();
    var that = this;
    if (name === "") { return };
    Breath.user.tasks().create({
      name: name,
      parent_id: that.model.id, 
      project_id: that.model.get('project_id')
    }, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')) {
          var project = Breath.user.projects().get(obj.get('project_id'));
          project.tasks().add(obj);
        }
        that.model.fetch();
        Breath.user.tasks().sort();
      }
    })
  },

  toggleComplete: function(event){
    var taskId = $(event.currentTarget).data('id')
    var task = Breath.user.tasks().get(taskId);
    var that = this;
    var completedVar = task.get('completed') ? false : true
    task.save('completed', completedVar, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')) {
          var project = Breath.user.projects().get(obj.get('project_id'));
          project.tasks().get(taskId).save('completed', completedVar)
        }
        that.model.fetch();
        Breath.user.tasks().sort();
      }
    })
  },

  render: function(){
    var renderedContent = this.template({
      task: this.model,
      subtasks: this.model.subtasks()
    });

    this.$el.html(renderedContent);
    return this;
  }
})
