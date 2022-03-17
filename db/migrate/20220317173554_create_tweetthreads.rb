class CreateTweetthreads < ActiveRecord::Migration[6.1]
  def change
    create_table :tweetthreads do |t|
      t.string :title
      t.string :description
      t.string :author

      t.timestamps
    end
  end
end
