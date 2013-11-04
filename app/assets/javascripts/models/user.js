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

  teams: function(){
    if (!this._teams) {
      this._teams = new Breath.Collections.Teams([], { user: this});
    }
    return this._teams;
  },

  parse: function(attributes){
    this.projects().reset(attributes.projects, {parse: true});
    this.tasks().reset(attributes.tasks);
    this.teams().reset(attributes.teams, { parse: true });

    delete attributes.teams;
    delete attributes.projects;
    delete attributes.tasks;
    return attributes
  }
})
