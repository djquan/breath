Breath.Collections.Tasks = Backbone.Collection.extend({
  model:  Breath.Models.Task,
  url:    '/api/tasks',
  comparator: function(task){
    var due = task.get('due') || "999999999999999999999999999999999"
    console.log(due);
    return [task.get('completed'), due]
    // var t1Completed = task1.get('completed');
    // var t2Completed = task2.get('completed');
    // var t1Due       = task1.get('due') ? new Date(task1.get('due')) : 0;
    // var t2Due       = task2.get('due') ? new Date(task2.get('due')) : 0;
    
    // if (t1Completed && t2Completed){ return 0 };
    // if (t1Completed) { return 1 };
    // if (t2Completed) { return -1 };
    
    // var i = _.sortBy([task1, task2], function(task){
    //   return task.get('due')
    // });

    // console.log(i);
    // return i
    // if (t2Due === 0 && t1Due !== 0) { return -1 };
    // if (t1Due === 0 && t2Due !== 0) { return 1 };
    // if (t1Due === 0 && t2Due === 0) { return 0 };
    // if (t1Due > t2Due) { return -1 };
    // if (t2Due < t1Due) { return 1 };
    // return 0;
  }
})
