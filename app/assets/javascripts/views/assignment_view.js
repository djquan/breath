Breath.Views.AssignmentView = Backbone.View.extend({
  template: JST['tasks/assignments'],
  initialize: function(){
    this.listenTo(this.collection, "add remove sync change", this.render);
    this.listenTo(this.model, "add remove sync change", this.render);
  },

  events: {
    'change .add-users': 'assignUser',
  },


  assignUser: function(event){
    var that = this;
    var selectedUserID = $(event.currentTarget).val();
    if (selectedUserID === "") { return  };
    $.ajax({
      type: "POST",
      url: "api/tasks/" + this.model.id + '/assign_user',
      data: { user: selectedUserID },

      success: function(){
        that.model.fetch();
      },
    })
  },

  render: function(){
    var renderedContent = this.template({
      a_users: this.collection,
      task: this.model
    });
    this.$el.html(renderedContent);
    return this;
  }
})
