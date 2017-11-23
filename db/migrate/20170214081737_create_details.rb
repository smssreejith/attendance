class CreateDetails < ActiveRecord::Migration[5.0]
  def change
    create_table :details do |t|
      t.string :msisdn
      t.datetime :date
      t.string :latitude
      t.string :longitude
      t.string :stock
      t.string :add
      t.text :comment

      t.timestamps
    end
  end
end
