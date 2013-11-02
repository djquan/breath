Breath.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showRootPage',
  },

  showRootPage: function(){
    console.log("hello");
  },
})
