Breath.Views.TaskEdit = Backbone.View.extend({
  template: JST['tasks/edit'],

  initialize: function(){
    this.listenTo(this.model, "add remove sync change", this.render);
  },

  events: {
    'blur input': 'updateTask',
    'click .completed': 'toggleComplete',
  },

  toggleComplete: function(event){
    var completedVar = this.model.get('completed') ? false : true
    this.model.save('completed', completedVar, {
      success: function(obj){
      }
    })
  },

  updateTask: function(event){
    var target = $(event.currentTarget).attr('name');
    var payload = $(event.currentTarget).val();
    this.model.save(target, payload, {
      success: function(obj){
      }
    })
  },

  render: function(){
    var renderedContent = this.template({
      task: this.model
    });

    this.$el.html(renderedContent);
    return this;
  }
})
