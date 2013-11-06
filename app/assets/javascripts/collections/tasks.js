Breath.Collections.Tasks = Backbone.Collection.extend({
  model:  Breath.Models.Task,
  url:    '/api/tasks',
  comparator: function(task){
    var due = task.get('due') || "999999999999999999999999999999999"
    return [task.get('completed'), due]
  }
})
