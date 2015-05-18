class NotificationsController < ApplicationController
  before_action :set_current_user, :authenticate_request, only: [:get_new_notifications, :mark_viewed, :get_all_notifications]

  def get_new_notifications
    @num = Notification.where(:viewed => false, :user_id => current_user.id).count
    return render json: {new: @num}
  end

  def mark_viewed
    @my_notifications = Notification.where(:viewed => false, :user_id => current_user.id).all
    @my_notifications.each do |notification|
        notification.viewed = true
        notification.save
    end
    return render json: {status: "OK"}
  end

  def get_all_notifications
    @my_notifications = Notification.where(:user_id => current_user.id).all
    return render json: {notifications: @my_notifications}
  end

  def new_notification
    @notification = Notification.new
    @notification.text = params[:text]
    @notification.user_id = params[:user]
    @notification.viewed = false
    @notification.save
    return render json: {status: "OK"}
  end

  
end
