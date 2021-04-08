class AddTablesToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :about, :text
    add_column :users, :image, :string
    add_column :users, :, :string
end
  end
end
