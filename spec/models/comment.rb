require 'rails_helper'

RSpec.describe Comment, type: :model do
    it "is valid with valid attributes"
  it "is not valid without a title"
  it "is not valid without a description"
  it "is not valid without a start_date"
  it "is not valid without a end_date"
    # let(:user) {User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)}
    # let(:tweetthread) {Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: user.id)}
    

    # describe "relationships" do

    #     it 'can access the associated user' do
    #         comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
    #         expect(comment.user).to eq(user)
    #     end

    #     it 'can access the associated tweetthread' do
    #         comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
    #         expect(comment.tweetthread).to eq(tweetthread)
    #     end
    # end
end