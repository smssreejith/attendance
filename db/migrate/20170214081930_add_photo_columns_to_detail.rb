class AddPhotoColumnsToDetail < ActiveRecord::Migration[5.0]
  def up
    add_attachment :details, :photo
  end

  def down
    remove_attachment :details, :photo
  end
end
