Breath.Views.TeamDetail = Backbone.View.extend({
  template: JST['teams/detail'],

  initialize: function(){
    this.listenTo(this.model, "add change remove sync", this.render);
    this.listenTo(this.model.users(), "add change remove sync", this.render);
  },

  events: {
    'change .add-users': 'addUser'
  },

  addUser: function(event){
    var that = this;
    var selectedUserID = $(event.currentTarget).val();
    $.ajax({
      type: "POST",
      url: "api/teams/add_user",
      data:  { user_id: selectedUserID, 
               team_id: this.model.id },

      success: function(obj){
        that.model.users().add(obj);
      }
    })
  },

  render: function(){
    renderedContent = this.template({
      team: this.model,
      users: Breath.users
    });

    this.$el.html(renderedContent);
    return this;
  }
})
