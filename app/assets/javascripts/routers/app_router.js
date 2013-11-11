Breath.Routers.AppRouter = Backbone.Router.extend({
  routes: {
    '': 'showRootPage',
    'projects/:id': 'showProjectPage',
    'tasks/:id': 'showTaskEditPage',
    'projects/:proj/tasks/:id': 'showProjectTaskEditPage',
    'teams/:id': 'showTeamDetailPage'
  },

  showTeamDetailPage: function(id){
    var teamDetailPage = new Breath.Views.TeamDetail({
      model: Breath.user.teams().get(id)
    });
    this._swapMainView(teamDetailPage);
  },

  showProjectTaskEditPage: function(proj, id){
    var project = Breath.user.projects().get(proj);
    var taskEditPage;
    if (project) {
      taskEditPage = new Breath.Views.TaskEdit({
        model: project.tasks().get(id),
        collection: project
      });
    } else {
      taskEditPage = new Breath.Views.TaskEdit({
        model: Breath.user.tasks().get(id)
      })
    }
    this._swapTaskView(taskEditPage)
  },

  showTaskEditPage: function(id){
    $('.task-detail').removeClass('hidden');
    if ($('.index').hasClass('span8')){
      $('.index').removeClass('span8');
      $('.index').addClass('span5');
    }
    var taskEditPage = new Breath.Views.TaskEdit({
      model: Breath.user.tasks().get(id)
    });
    this._swapTaskView(taskEditPage)
  },

  showRootPage: function(){
    var sidebar = new Breath.Views.SidebarView({
      model: Breath.user
    });
    var taskIndex = new Breath.Views.TaskIndex({
      collection: Breath.user.tasks()
    });
    $('.app-sidebar').html(sidebar.render().$el);
    this._swapMainView(taskIndex);
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
  },

  _swapTaskView: function(newView){
    if (this._prevTaskView) { this._prevTaskView.remove(); }
    this._prevTaskView = newView;
    newView.render();
    $(".task-detail").html(newView.$el);
  }
})
