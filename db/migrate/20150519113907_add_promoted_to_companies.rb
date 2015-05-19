class AddPromotedToCompanies < ActiveRecord::Migration
  def change
    add_column :companies, :promoted, :boolean
  end
end
