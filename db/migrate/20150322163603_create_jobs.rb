class CreateJobs < ActiveRecord::Migration
  def change
    create_table :jobs do |t|
      t.references :category
      t.references :company
      t.string :description
      t.references :location
      t.datetime :duration

      t.timestamps null: false
    end
    #add_foreign_key :jobs, :categories
    #add_foreign_key :jobs, :companies
    #add_foreign_key :jobs, :locations
  end
end
