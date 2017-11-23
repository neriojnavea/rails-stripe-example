class CreateCharges < ActiveRecord::Migration[5.1]
  def change
    create_table :charges do |t|
      t.integer :amount_cents
      t.string :gateway_id
      t.references :user, foreign_key: true
      t.string :gateway

      t.timestamps
    end
  end
end
