Breath.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showRootPage',
    'projects/:id': 'showProjectPage'
  },

  showRootPage: function(){
    var sidebar = new Breath.Views.SidebarView({
      model: Breath.user
    });
    $('.app-sidebar').html(sidebar.render().$el)
  },

  showProjectPage: function(id){
    var projectPage = new Breath.Views.ProjectView({
      model: Breath.user.projects().get(id)
    });

    this._swapMainView(projectPage);
  },

  _swapMainView: function (newView) {
    if (this._prevMainView) { this._prevMainView.remove(); }
    this._prevMainView = newView;
    newView.render();
    $(".index").html(newView.$el);
  }
})
