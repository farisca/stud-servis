class CreateEmployers < ActiveRecord::Migration
  def change
    create_table :employers do |t|
      t.string :name
      t.references :location, index: true
      t.string :description
      t.string :web
      t.string :phone

      t.timestamps null: false
    end
    add_foreign_key :employers, :locations
  end
end
