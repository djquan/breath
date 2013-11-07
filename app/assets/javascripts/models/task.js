Breath.Models.Task = Backbone.Model.extend({
  urlRoot: 'api/tasks',

  subtasks: function(){
    if (!this._subtasks) {
      this._subtasks = new Breath.Collections.Tasks([], { task: this});
    }
    return this._subtasks;
  },

  comments: function(){
    if (!this._comments) {
      this._comments = new Breath.Collections.Comments([], { task: this});
    }
    return this._comments;
  },

  assigned_users: function(){
    if (!this._assigned_users) {
      this._assigned_users = new Breath.Collections.Users([], { task: this});
    }
    return this._assigned_users;
  },

  parse: function(attributes){
    this.comments().reset(attributes.comments);
    this.assigned_users().reset(attributes.assigned_users);
    this.subtasks().reset(attributes.subtasks);
    delete attributes.assigned_users
    delete attributes.comments
    delete attributes.subtasks
    return attributes;
  }
})
