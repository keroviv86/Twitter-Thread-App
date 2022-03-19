class CreateTweetthreads < ActiveRecord::Migration[6.1]
  def change
    create_table :tweetthreads do |t|
      t.belongs_to :user
      t.string :title
      t.string :description

      t.timestamps
    end
  end
end
