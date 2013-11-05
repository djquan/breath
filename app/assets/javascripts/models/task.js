Breath.Models.Task = Backbone.Model.extend({
  urlRoot: 'api/tasks',

  comments: function(){
    if (!this._comments) {
      this._comments = new Breath.Collections.Comments([], { user: this});
    }
    return this._comments;
  },

  parse: function(attributes){
    this.comments().reset(attributes.comments);

    delete attributes.comments
    return attributes;
  }
})
