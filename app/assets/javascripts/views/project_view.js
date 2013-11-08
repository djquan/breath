Breath.Views.ProjectView = Backbone.View.extend({
  template: JST['tasks/index'],
  initialize: function(){
    this.listenTo(this.model.tasks(), "add change remove sync", this.render);
    this.listenTo(this.model, "add remove change sync", this.render)
    this.listenTo(Breath.user.tasks(), "add change remove sync", this.render)
  },

  events: {
    'blur #form-task': 'submitTask',
    'click .task_list': 'showTask', 
    'click .complete-check': 'toggleComplete',
    'click .sort': 'toggleSort'
  },

  toggleSort: function(event){
    event.preventDefault();
    this.model.tasks().sortByDueDate = this.model.tasks().sortByDueDate ? false : true;
    this.model.tasks().sort();
    this.render();
  },

  render: function(){
    this.model.tasks().sort();
    var renderedContent = this.template({
      project: this.model, 
      tasks: this.model.tasks(),
      sortByDate: this.model.tasks().sortByDueDate
    });
    this.$el.html(renderedContent);
    return this;
  },

  toggleComplete: function(event){
    var task = this.model.tasks().get($(event.currentTarget).data('id'));
    var completedVar = task.get('completed') ? false : true
    var that = this;
    task.save('completed', completedVar, {
      success: function(obj){
        Breath.user.fetch();
        Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/' + obj.id, {trigger: true})
        that.model.tasks().sort();
      }
    })
  },

  showTask: function(event){
    var destination = $(event.currentTarget).data('id');
    Backbone.history.navigate('projects/' + this.model.id + '/tasks/' + destination, {trigger: true})
  },

  submitTask: function(event){
    var name = $(event.currentTarget).val();
    var that = this;
    if (name === "") { return  };
    this.model.tasks().create({
      name: name,
      project_id: this.model.id
    }, {
      success: function(obj){
        Breath.user.tasks().add(obj);
        Backbone.history.navigate('projects/' + obj.get('project_id') + '/tasks/' + obj.id, {trigger: true})
        that.model.tasks().sort();
      }
    })
  }
})
