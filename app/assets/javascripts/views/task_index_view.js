Breath.Views.TaskIndex = Backbone.View.extend({
  template: JST['tasks/index'],

  initialize: function(){
    this.listenTo(this.collection, "add remove change sync refresh", this.render);
    this.listenTo(Breath.user, 'sync', this.render);
    this.collection.sort({silent: true});
  },

  events: {
    'blur #form-task': 'submitTask',
    'keyup #form-task': 'blur',
    'click .tasks': 'showTask', 
    'click .complete-check': 'toggleComplete',
    'click .stars': 'toggleStar',
    'click .sort': 'toggleSort'
  },

  blur: function(event){
    if (event.which === 13) { event.currentTarget.blur() }
  },

  toggleSort: function(event){
    event.preventDefault();
    this.collection.sortByDueDate = this.collection.sortByDueDate ? false : true;
    this.collection.sort();
    this.render();
  },

  render: function(){
    var name = (this.model) || "All" 
    var renderedContent = this.template({
      tasks: this.collection,
      project: new Breath.Models.Project({name: name, id: 0}),
      sortByDate: this.collection.sortByDueDate 
    });
    this.$el.html(renderedContent);
    return this;
  },

  toggleStar: function(event){
    var taskId = $(event.currentTarget).data('id')
    var task = this.collection.get(taskId);
    var that = this;
    var completedVar = task.get('starred') ? false : true
    task.save('starred', completedVar, {
      success: function(obj){
        if (obj.hasProject()) {
          var project = Breath.user.projects().get(obj.get('project_id'));
          project.tasks().get(taskId).save('starred', completedVar)
          Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
        } else {
          Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
        }
        that.collection.sort();
      }
    })
  },

  toggleComplete: function(event){
    var taskId = $(event.currentTarget).data('id')
    var task = this.collection.get(taskId);
    var that = this;
    var completedVar = task.get('completed') ? false : true
    task.save('completed', completedVar, {
      success: function(obj){
        if (obj.hasProject()) {
          var project = Breath.user.projects().get(obj.get('project_id'));
          project.tasks().get(taskId).save('completed', completedVar)
          Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
        } else {
          Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
        }
        that.collection.sort();
      }
    })
  },

  showTask: function(event){
    var destination = $(event.currentTarget).data('id');
    var obj = this.collection.get(destination);
    if (obj.hasProject()) {
      var project = Breath.user.projects().get(obj.get('project_id'));
      Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
    } else {
      Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
    }
  },

  submitTask: function(event){
    var name = $(event.currentTarget).val();
    var that = this;
    if (name === "") { return };
    this.collection.create({
      name: name
    }, {
      success: function(obj){
        Backbone.history.navigate('/tasks/' + obj.id, {trigger: true})
        that.collection.sort();
        $('.user-alerts').html('Added a task');
        $('.user-alerts').show(300);
        setTimeout(function(){
          $('.user-alerts').hide(300)
        }, 4000)
      }
    })
  }
})
