class AddUserToEmployers < ActiveRecord::Migration
  def change
    add_reference :employers, :user, index: true
    add_foreign_key :employers, :users
  end
end
