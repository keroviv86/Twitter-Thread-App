# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding data..."

u1 = User.create(name: 'Viv', email: "keroviv86@gmail.com", password: "12345", admin: false)
u2 = User.create(name: 'Kevin', email: "keroviv86@gmail.com", password: "turtle", admin: false)

t1 = Tweetthread.create(title:'Test Thread #1', description: 'my first thread!', user_id: u1.id)
t2 = Tweetthread.create(title:'Test Thread #2', description: 'my second thread!', user_id: u2.id)
t3 = Tweetthread.create(title:'Test Thread #3', description: 'my third thread!', user_id: u1.id)
t4 = Tweetthread.create(title:'Test Thread #4', description: 'my fourth thread!', user_id: u2.id)
t5 = Tweetthread.create(title:'Test Thread #5', description: 'my fifth thread!', user_id: u1.id)
t6 = Tweetthread.create(title:'Test Thread #6', description: 'my sixth thread!', user_id: u1.id)
t7 = Tweetthread.create(title:'Test Thread #7', description: 'my seventh thread!', user_id: u2.id)
t8 = Tweetthread.create(title:'Test Thread #8', description: 'my eighth thread!', user_id: u2.id)

Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: t1.id, order: 0)
Tweet.create(twitter_api_id: '1504586176232976396', tweetthread_id: t1.id, order: 1)
Tweet.create(twitter_api_id: '1504590603950166019', tweetthread_id: t1.id, order: 2)


Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: t2.id, order: 2)
Tweet.create(twitter_api_id: '1504586176232976396', tweetthread_id: t2.id, order: 1)
Tweet.create(twitter_api_id: '1504590603950166019', tweetthread_id: t2.id, order: 0)

Comment.create(user_id: u1.id, tweetthread_id: t1.id, parent_comment_id: 0, comment: 'test')
Comment.create(user_id: u2.id, tweetthread_id: t1.id, parent_comment_id: 0, comment: 'test1')
Comment.create(user_id: u1.id, tweetthread_id: t2.id, parent_comment_id: 0, comment: 'test2')