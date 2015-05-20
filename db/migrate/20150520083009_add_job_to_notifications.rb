class AddJobToNotifications < ActiveRecord::Migration
  def change
  	add_reference :notifications, :job, index: true
    add_foreign_key :notifications, :jobs    
  end
end
