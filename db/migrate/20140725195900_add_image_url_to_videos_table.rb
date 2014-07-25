class AddImageUrlToVideosTable < ActiveRecord::Migration
  def change
    add_column :videos, :image_url, :text
  end
end
