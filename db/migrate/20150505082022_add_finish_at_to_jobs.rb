class AddFinishAtToJobs < ActiveRecord::Migration
  def change
    add_column :jobs, :finish_at, :date
  end
end
