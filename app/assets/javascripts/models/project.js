Breath.Models.Project = Backbone.Model.extend({
  urlRoot: '/api/projects',

  tasks: function(){
    if (!this._tasks) {
      this._tasks = new Breath.Collections.Tasks([], { user: this});
    }
    return this._tasks;
  },

  parse: function(attributes){
    this.tasks().reset(attributes.tasks);
    delete attributes.tasks;
    return attributes
  }
})
