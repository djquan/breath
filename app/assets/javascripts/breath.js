window.Breath = {
  Models: {},
  Collections: {},
  Views: {},
  Routers: {},
  initialize: function() {
    new Breath.Routers.AppRouter();
    Backbone.history.start();
  }
};

// $(document).ready(function(){
//   Breath.initialize();
// });
