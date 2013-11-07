Breath.Models.Task = Backbone.Model.extend({
  urlRoot: 'api/tasks',

  comments: function(){
    if (!this._comments) {
      this._comments = new Breath.Collections.Comments([], { user: this});
    }
    return this._comments;
  },

  assigned_users: function(){
    if (!this._assigned_users) {
      this._assigned_users = new Breath.Collections.Users([], { user: this});
    }
    return this._assigned_users;
  },

  parse: function(attributes){
    this.comments().reset(attributes.comments);
    this.assigned_users().reset(attributes.assigned_users);

    delete attributes.assigned_users
    delete attributes.comments
    return attributes;
  }
})
