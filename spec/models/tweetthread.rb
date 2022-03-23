require 'rails_helper'

RSpec.describe Tweetthread, type: :model do
    let(:user) {User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)}
    let(:tweetthread) {Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: user.id)}
    

    describe "relationships" do

        it 'can access the associated comments' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
            expect(tweetthread.comments).to include(comment)
        end

        it 'can access the associated user' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
            expect(tweetthread.user).to eq(user)
        end
    end
end