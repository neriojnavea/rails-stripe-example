class AddStatusToCharges < ActiveRecord::Migration[5.1]
  def change
    add_column :charges, :status, :integer
  end
end
