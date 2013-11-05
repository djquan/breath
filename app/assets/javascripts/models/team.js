Breath.Models.Team = Backbone.Model.extend({
  urlRoot: 'api/teams',
  projects: function(){
    if (!this._projects) {
      this._projects = new Breath.Collections.Projects([], { user: this});
    }
    return this._projects;
  },

  users: function(){
    if (!this._users) {
      this._users = new Breath.Collections.Users([], { user: this});
    }
    return this._users;
  },

  parse: function(attributes){
    this.projects().reset(attributes.projects, {parse: true});
    this.users().reset(attributes.users);
    Breath.user.projects().add(attributes.projects, {parse: true});
    delete attributes.projects;
    delete attributes.users;
    return attributes;
  }
})
