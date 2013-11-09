Breath.Views.TaskEdit = Backbone.View.extend({
  template: JST['tasks/edit'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync change", this.render);
    this.model.fetch({silent: true})
  },

  events: {
    'blur .tag-form': 'addTag',
    'blur .update-task': 'updateTask',
    'blur .form-description': 'updateTask',
    'click .completed': 'toggleComplete',
    'click .remove': 'removeTask',
    'click .parent-task': 'showParent'
  },

  addTag: function(event){
    var payload = $(event.currentTarget).val();
    var that = this;
    if (payload === "") { return }
    $.ajax({
      type: "POST",
      url: "api/tasks/" + this.model.id + '/add_tag',
      data: { name: $(event.currentTarget).val() },
      success: function(){
        console.log('hello');
        that.model.fetch();
      }
    })
  },

  showParent: function(event){
    var destination = $(event.currentTarget).data('id');
    var obj = Breath.user.tasks().get(destination);
    if (obj.get('project_id') !== 0 && obj.get('project_id')) {
      var project = Breath.user.projects().get(obj.get('project_id'));
      Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/'+ obj.id, {trigger: true})
    } else {
      Backbone.history.navigate('tasks/' + obj.id, {trigger: true})
    }
  },

  toggleComplete: function(event){
    event.preventDefault();
    var completedVar = this.model.get('completed') ? false : true;
    var that = this;
    this.model.save('completed', completedVar, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')){
          Breath.user.tasks().get(obj.id).save('completed', completedVar);
          Breath.user.tasks().sort();
        }
        that.model.fetch({silent: true});
        that.model.collection.sort();
      }
    })
  },

  updateTask: function(event){
    var target = $(event.currentTarget).attr('name');
    var payload = $(event.currentTarget).val();
    var that = this;
    this.model.save(target, payload, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')){
          Breath.user.tasks().get(obj.id).save(target, payload);
          Breath.user.tasks().sort();
        }
        that.model.fetch({silent: true});
        that.model.collection.sort();
      }
    })
  },

  removeTask: function(event){
    this.model.destroy({
      success: function(obj){
        Breath.user.fetch();
        $('.task-detail').html("<div class='alert alert-danger'> <h5> Successfully Removed </h5></div>")
      }
    });
  },

  remove: function(){
    this.comments.remove();
    this.assignments.remove();
    this.subtasks.remove();
    Backbone.View.prototype.remove.call(this);
  },

  render: function(){
    var renderedContent = this.template({
      task: this.model,
      project: this.collection,
      tags: this.model.get('tags') || []
    });

    this.subtasks = new Breath.Views.SubtaskView({
      model: this.model,
      collection: this.model.subtasks()
    });

    this.assignments = new Breath.Views.AssignmentView({
      model: this.model,
      collection: this.model.assigned_users()
    });

    this.comments = new Breath.Views.CommentView({
      model: this.model,
      collection: this.model.comments()
    });

    this.$el.html(renderedContent);
    this.$el.append(this.subtasks.render().$el)
    this.$el.append(this.assignments.render().$el)
    this.$el.append(this.comments.render().$el)
    return this;
  }
})
