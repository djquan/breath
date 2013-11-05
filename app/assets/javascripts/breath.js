window.Breath = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Breath.user = new Breath.Models.User()
    Breath.user.set('id', 1)
    Breath.users = new Breath.Collections.Users()
    Breath.users.fetch();
    Breath.user.fetch({
      success: function(){
        new Breath.Routers.AppRouter();
        Backbone.history.start();
      }
    })
  }
};
