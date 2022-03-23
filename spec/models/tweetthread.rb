require 'rails_helper'

RSpec.describe Tweetthread, type: :model do
    let(:user) {User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)}
    let(:tweetthread) {Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: user.id)}
    let(:tweet) {Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: tweetthread.id, order: 2)}

    describe "relationships" do

        it 'can access the associated comments' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
            expect(tweetthread.comments).to include(comment)
        end

        it 'can access the associated user' do
            expect(tweetthread.user).to eq(user)
        end

        it 'can access the associated tweet' do 
            expect(tweetthread.tweets).to include(tweet)
        end
    end
end