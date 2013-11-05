class Api::CommentsController < ApplicationController
  def create
    task = Task.find(params[:task_id])
    comment = task.comments.create(body: params[:body],
                                    commenter_id: current_user.id)
    render json: comment
  end


  private
  def comment_params
    params.require(:comment).permit(:body, :commenter_id, :task_id)
  end
end
