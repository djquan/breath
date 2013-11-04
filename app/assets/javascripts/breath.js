window.Breath = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    Breath.user = new Breath.Models.User()

    Breath.user.fetch({
      success: function(){
        new Breath.Routers.AppRouter();
        Backbone.history.start();
      }
    })
  }
};
