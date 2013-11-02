Breath.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showRootPage',
  },

  showRootPage: function(){
    var sidebar = new Breath.Views.SidebarView({
      model: Breath.user
    });
    $('.app-sidebar').html(sidebar.render().$el)
  },

  _swapView: function (newView) {
    if (this._prevView) { this._prevView.remove(); }
    this._prevView = newView;
    newView.render();
    $(".content").html(newView.$el);
  }
})
