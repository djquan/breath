Breath.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  projects: function(){
    if (!this._projects) {
      this._projects = new Breath.Collections.Projects([], { user: this});
    }
    return this._projects;
  },

  tasks: function(){
    if (!this._tasks) {
      this._tasks = new Breath.Collections.Tasks([], { user: this});
    }
    return this._tasks;
  },

  parse: function(attributes){
    this.projects().reset(attributes.projects);
    this.tasks().reset(attributes.tasks);
    delete attributes.projects;
    delete attributes.tasks;
    return attributes
  }
})
