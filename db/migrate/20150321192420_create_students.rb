class CreateStudents < ActiveRecord::Migration
  def change
    create_table :students do |t|
      t.string :name
      t.string :surname
      t.references :location, index: true
      t.string :university
      t.string :faculty
      t.string :cv
      t.references :user, index: true

      t.timestamps null: false
    end
    add_foreign_key :students, :locations
    add_foreign_key :students, :users
  end
end
