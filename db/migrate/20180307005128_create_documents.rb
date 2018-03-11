class CreateDocuments < ActiveRecord::Migration[5.1]
  def change
    create_table :documents do |t|
      t.string :title
      t.date :expiration_date
      t.references :customer, foreign_key: true
      t.boolean :done

      t.timestamps
    end
  end
end
