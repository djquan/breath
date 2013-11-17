Breath.Views.CommentView = Backbone.View.extend({
  template: JST['tasks/comments'],

  initialize: function(){
    this.listenTo(this.collection, "add remove sync change", this.render);
  },

  events: {
    'blur .comment-box': 'sendComment',
    'keyup .comment-box': 'blur',
  },

  blur: function(event){
    if (event.which === 13) { event.currentTarget.blur() }
  },

  sendComment: function(event){
    var that = this;
    var comment = $(event.currentTarget).val();
    if (comment === '') { return }
    var comment = new Breath.Models.Comment({
      body: comment,
      task_id: this.model.id
    });

    comment.save({}, {
      success: function(obj){
        that.collection.add(obj)
        $('.user-alerts').html('Comment added');
        $('.user-alerts').show(300);
        setTimeout(function(){
          $('.user-alerts').hide(300)
        }, 3000)
      }
    })
  },

  render: function(){
    var renderedContent = this.template({
      comments: this.collection
    });
    this.$el.html(renderedContent);
    return this;
  }
})
