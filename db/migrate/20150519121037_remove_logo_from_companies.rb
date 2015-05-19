class RemoveLogoFromCompanies < ActiveRecord::Migration
  def change
    remove_column :companies, :logo, :boolean
  end
end
