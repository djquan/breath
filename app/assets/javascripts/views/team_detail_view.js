Breath.Views.TeamDetail = Backbone.View.extend({
  template: JST['teams/detail'],

  initialize: function(){
    this.listenTo(this.model, "add change remove sync", this.render);
    this.listenTo(this.model.users(), "add change remove sync", this.render);
  },

  events: {
    'change .add-users': 'addUser',
    'click .leave': 'leaveTeam'
  },

  addUser: function(event){
    var that = this;
    var selectedUserID = $(event.currentTarget).val();
    if (selectedUserID === "") { return  }
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

  leaveTeam: function(event){
    var that = this;
    $.ajax({
      type: "POST",
      url: "api/teams/leave_team",
      data: { team_id: this.model.id },
      success: function(obj){
        Breath.user.teams().remove(that.model);
        Backbone.history.navigate('', {trigger:true})
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
