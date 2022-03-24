require 'rails_helper'

RSpec.describe "TweetThread", type: :request do
  before do
    u1 = User.create(name: 'Viv', email: "keroviv86@gmail.com", password: "12345", admin: false)
    u2 = User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)
    
    t1 = Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: u1.id)
    t2 = Tweetthread.create(title:'Test Thread #2', description: 'my second thread!', user_id: u2.id)
    
    Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: t1.id, order: 0)
    Tweet.create(twitter_api_id: '1504586176232976396', tweetthread_id: t1.id, order: 1)
    Tweet.create(twitter_api_id: '1504590603950166019', tweetthread_id: t1.id, order: 2)


    Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: t2.id, order: 2)
    Tweet.create(twitter_api_id: '1504586176232976396', tweetthread_id: t2.id, order: 1)
    Tweet.create(twitter_api_id: '1504590603950166019', tweetthread_id: t2.id, order: 0)
    post '/login', params: { name:'Kevin', password: 'turtle'}
  end

  describe "GET /tweetthreads" do  
    it 'returns an array of all threads' do 
      get '/tweetthreads'

      puts response.body
      expect(response.body).to include_json(
        [
        { id: a_kind_of(Integer), 
          title:'Test Thread #1', 
          description: 'my first thread!', 
          tweets:[
            {
              id: a_kind_of(Integer),
              twitter_api_id:"1502673952572854278",
              order:0,
              tweetthread_id:a_kind_of(Integer)
            },
            {
                id: a_kind_of(Integer),
                twitter_api_id:"1504586176232976396",
                order:1,
                tweetthread_id:a_kind_of(Integer)
              },
            {
                id: a_kind_of(Integer),
                twitter_api_id:"1504590603950166019",
                order:2,
                tweetthread_id:a_kind_of(Integer)
              }
          ],
          author:
          {id:a_kind_of(Integer),
            name:"Viv",
            email:"keroviv86@gmail.com",
            admin:false}
        },
        {
          id:a_kind_of(Integer),
          title:"Test Thread #2",
          description:"my second thread!",
          tweets:[
            {
              id:a_kind_of(Integer),
              twitter_api_id:"1502673952572854278",
              order:2,
              tweetthread_id:a_kind_of(Integer)
              },
              {
                id:a_kind_of(Integer),
                twitter_api_id:"1504586176232976396",
                order:1,
                tweetthread_id:a_kind_of(Integer)
                },
                {id:a_kind_of(Integer),
                  twitter_api_id:"1504590603950166019",
                  order:0,
                  tweetthread_id:a_kind_of(Integer)
                  }
          ],
          author:
          {
            id:a_kind_of(Integer),
            name:"Kevin",
            email:"keroviv86@gmail.com",
            admin:false}
        }
        
      ]
      # [{"id":233,"title":"Test Thread #1","description":"my first thread!","tweets":[{"id":90,"twitter_api_id":"1502673952572854278","order":0,"tweetthread_id":233},{"id":91,"twitter_api_id":"1504586176232976396","order":1,"tweetthread_id":233},{"id":92,"twitter_api_id":"1504590603950166019","order":2,"tweetthread_id":233}],"author":{"id":236,"name":"Viv","email":"keroviv86@gmail.com","admin":false}},{"id":234,"title":"Test Thread #2","description":"my second thread!","tweets":[{"id":93,"twitter_api_id":"1502673952572854278","order":2,"tweetthread_id":234},{"id":94,"twitter_api_id":"1504586176232976396","order":1,"tweetthread_id":234},{"id":95,"twitter_api_id":"1504590603950166019","order":0,"tweetthread_id":234}],"author":{"id":237,"name":"Kevin","email":"keroviv86@gmail.com","admin":false}}]
    )
    end

   

    it 'returns a status of 200 (OK)' do
      get "/tweetthreads"
      
      expect(response).to have_http_status(:ok)
    end

    # it 'does not return any nested twe' do
    #   get '/heroes'

    #   expect(response.body).not_to include_json([
    #     {
    #       powers: a_kind_of(Array)
    #     }
    #   ])
    # end
  end
end
