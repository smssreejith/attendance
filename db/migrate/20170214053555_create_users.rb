class CreateUsers < ActiveRecord::Migration[5.0]
  def change
    create_table :users do |t|
      t.string :mobile
      t.string :password
      t.string :role

      t.timestamps
    end
  end
end
