require 'rails_helper'

RSpec.describe Tweet, type: :model do
    let(:user) {User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)}
    let(:tweetthread) {Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: user.id)}
    

    describe "relationships" do

        it 'can access the associated tweetthread' do
            tweet =Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: tweetthread.id, order: 2)
            
            expect(tweet.tweetthread).to eq(tweetthread)
        end

    end

    describe 'validations' do
        it { is_expected.to validate_presence_of(:twitter_api_id) }
        it { is_expected.to validate_presence_of(:tweetthread_id) }
      end
end