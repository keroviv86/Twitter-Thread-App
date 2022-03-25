class CreateUsers < ActiveRecord::Migration[6.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :description
      t.string :location  
      t.string :website 
      t.string :interest
      t.string :password_digest
      t.string :profile_photo
      t.boolean :admin
     

      t.timestamps
    end
  end
end
