Breath.Views.TaskEdit = Backbone.View.extend({
  template: JST['tasks/edit'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync change", this.render);
  },

  events: {
    'blur input': 'updateTask',
    'click .completed': 'toggleComplete',
    'click .remove': 'removeTask'
  },

  toggleComplete: function(event){
    var completedVar = this.model.get('completed') ? false : true
    this.model.save('completed', completedVar, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')){
          Breath.user.tasks().get(obj.id).save('completed', completedVar);
        }
      }
    })
  },

  updateTask: function(event){
    var target = $(event.currentTarget).attr('name');
    var payload = $(event.currentTarget).val();
    this.model.save(target, payload, {
      success: function(obj){
        if (obj.get('project_id') !== 0 && obj.get('project_id')){
          Breath.user.tasks().get(obj.id).save(target, payload);
        }
      }
    })
  },

  removeTask: function(event){
    this.model.destroy({
      success: function(obj){
        Breath.user.fetch();
        $('.task-detail').html('<h5> Successfully Removed </h5>')
      }
    });
  },

  render: function(){
    var renderedContent = this.template({
      task: this.model
    });
    var comments = new Breath.Views.CommentView({
      model: this.model,
      collection: this.model.comments()
    });
    this.$el.html(renderedContent);
    this.$el.append(comments.render().$el)
    return this;
  }
})
