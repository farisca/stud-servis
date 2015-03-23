class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.references :category, index: true
      t.references :company, index: true
      t.string :description
      t.references :location, index: true
      t.datetime :duration

      t.timestamps null: false
    end
    add_foreign_key :jobs, :categories
    add_foreign_key :jobs, :companies
    add_foreign_key :jobs, :locations
  end
end
