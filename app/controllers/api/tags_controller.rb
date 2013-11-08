class Api::TagsController < ApplicationController
  def add_tag
    task = Task.find(params[:task_id])
    tag_name = params[:name]
    tag = Tag.find_by name: tag_name
    if tag
      task.tags << tag
    else
      task.tags.create(name: tag_name)
    end

    render json: { "tag_name" => tag_name }
  end
end
