class CreateRegistrations < ActiveRecord::Migration
  def change
    create_table :registrations do |t|
      t.references :job, index: true
      t.references :student, index: true
      t.timestamp :time
      t.integer :active

      t.timestamps null: false
    end
    add_foreign_key :registrations, :jobs
    add_foreign_key :registrations, :students
  end
end
