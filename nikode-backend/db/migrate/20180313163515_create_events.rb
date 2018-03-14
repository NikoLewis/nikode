class CreateEvents < ActiveRecord::Migration[5.1]
  def change
    create_table :events do |t|
      t.string :title
      t.string :where
      t.string :summary
      t.string :info_link
      t.time :time
      t.date :date

      t.timestamps
    end
  end
end
