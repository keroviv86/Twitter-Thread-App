class CreateTweets < ActiveRecord::Migration[6.1]
  def change
    create_table :tweets do |t|
      t.string :twitter_api_id
      t.integer :thread_id
      t.integer :order

      t.timestamps
    end
  end
end
