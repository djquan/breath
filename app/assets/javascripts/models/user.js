Breath.Models.User = Backbone.Model.extend({
  urlRoot: '/users',

  projects: function(){
    if (!this._projects) {
      this._projects = new Breath.Collections.Projects([], { user: this});
    }
    return this._projects;
  },

  parse: function(attributes){
    this.projects().reset(attributes.projects);
    delete attributes.projects;
    return attributes
  }
})
