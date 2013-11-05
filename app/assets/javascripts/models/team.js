Breath.Models.Team = Backbone.Model.extend({
  urlRoot: 'api/team',
  projects: function(){
    if (!this._projects) {
      this._projects = new Breath.Collections.Projects([], { user: this});
    }
    return this._projects;
  },

  parse: function(attributes){
    this.projects().reset(attributes.projects, {parse: true});
    Breath.user.projects().add(attributes.projects, {parse: true});
    delete attributes.projects;
    return attributes;
  }
})
