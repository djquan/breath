class Api::AttachmentsController < ApplicationController
  def upload_file
    attachment = Attachment.new
    attachment.task_id = params[:task_id]
    attachment.task_attachment = params[:file]
    p attachment.task_attachment
    if attachment.save
      render json: attachment
    else
      render json: attachment.errors.full_messages, status: :unprocessable_entity
    end
  end
end
