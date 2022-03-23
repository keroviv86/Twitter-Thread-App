require 'rails_helper'

RSpec.describe Comment, type: :model do
    let(:user) {User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)}
    let(:tweetthread) {Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: user.id)}
    

    describe "relationships" do

        it 'can access the associated user' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
            expect(comment.user).to eq(user)
        end

        it 'can access the associated tweetthread' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            
            expect(comment.tweetthread).to eq(tweetthread)
        end

        it 'comment is deleted from database' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            comment.destroy
            expect{comment.reload}.to raise_error ActiveRecord::RecordNotFound
        end

        it 'comment is deleted from database on thread deletion' do
            comment = Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')
            tweetthread.destroy
            expect{comment.reload}.to raise_error ActiveRecord::RecordNotFound
        end
    end

    describe "validations" do

        it "must have a comment with at least 4 characters" do
          expect(Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test')).to be_valid
          expect(Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'moo')).to be_invalid
          expect(Comment.create(user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0)).to be_invalid
        end
    end
end