#Breath

_an Asana clone_. Open source group task manager.

Tech used:

* Backbone.js
* Rails 4.0.1
* Javascript + jQuery. 

##Features

* Teams
    * Users can be invited to any team. 
* Projects
    * Tasks can be organized in projects (or not!)
    * Projects can belong to a team (shared) or yourself (private)
* Tasks
    * Tasks can be assigned to any member. Tasks can be assigned to multiple users.
    * Tasks can have subtasks. Subtasks can have subtask (on and on forever). 
    * Tasks can be sorted by date, or a custom priority based off dragging and dropping tasks. (or starring tasks)
    * Users can comment on tasks that they are assigned to. 
    * Users can add tags to tasks
    * Users can upload files to tasks.
* Hand rolled authentication system for easy customization 
* Search
   * Tasks can be searched by name, tag name, or description.  
   * Custom function in the Tasks collection to allow easier flexibility and customization.

##Upcoming features

* Implement node.js and socket.io to help with scaling.  That way, events, when updated, can cause other users automatically to pull down the updates. 

##Known Issues

Feel free to submit issues if you find bugs.

[![Code Climate](https://codeclimate.com/github/djquan/breath.png)](https://codeclimate.com/github/djquan/breath)
