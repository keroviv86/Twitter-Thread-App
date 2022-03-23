require 'rails_helper'

RSpec.describe "Comment", type: :request do
    let!(:user) {User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)}
    let!(:tweetthread) {Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: user.id)}

    describe "POST /comments" do
    
        context "with valid data" do
            let!(:comment_params) { { user_id: user.id, tweetthread_id: tweetthread.id, parent_comment_id: 0, comment: 'test' } }
            
            it 'creates a new comment' do
                post '/login', params: { name:'Kevin', password: 'turtle'}
                expect{ post '/comments', params: comment_params }.to change(Comment, :count).by(1)
            end

            it 'returns the assoicated Tweetthread data' do
                post '/login', params: { name:'Kevin', password: 'turtle'}
                post '/comments', params: comment_params
                puts response.body
                expect(response.body).to include_json({
                    id: a_kind_of(Integer),
                    user_id: a_kind_of(Integer),
                    parent_comment_id: 0, 
                    comment: 'test'
                })
            end

            it 'returns a status of 201 (created)' do  
                post '/login', params: { name:'Kevin', password: 'turtle'}
                post "/comments", params: comment_params

                expect(response).to have_http_status(:created)  
            end  
        end

        context "with invalid data" do 
            let!(:invalid_params) { { user_id: user.id, parent_comment_id: 0, comment: "invalid"} }

            it 'does not create a new Comment' do 
                post '/login', params: { name:'Kevin', password: 'turtle'}
                expect{ post '/comments', params: invalid_params}.to change(Comment, :count).by(0)
            end

            it 'returns the error messages as an array' do 
                post '/login', params: { name:'Kevin', password: 'turtle'}
                post '/comments', params: invalid_params

                expect(response.body).to include_json({
                    errors: a_kind_of(Array)
                })
            end

            it 'returns a status code of 422 (Unprocessable Entity)' do 
                post '/login', params: { name:'Kevin', password: 'turtle'}
                post '/comments', params: invalid_params

                expect(response).to have_http_status(:unprocessable_entity)
            end
        end
    end
end

             

   