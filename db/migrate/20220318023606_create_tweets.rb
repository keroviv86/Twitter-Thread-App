class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.string :twitter_api_id
      t.belongs_to :tweetthread, null: false, foreign_key: true
      t.integer :order

      t.timestamps
    end
  end
end
