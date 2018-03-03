class CreateCustomers < ActiveRecord::Migration[5.1]
  def change
    create_table :customers do |t|
      t.string :name
      t.string :rif
      t.string :email
      t.string :address
      t.string :phone

      t.timestamps
    end
  end
end
