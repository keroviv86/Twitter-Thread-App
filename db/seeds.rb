# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

puts "🌱 Seeding data..."

u1 = User.create(name: 'Viv', email: "keroviv86@gmail.com", password: "12345", admin: false)

t1 = Tweetthread.create(id: 1, title:'Test Thread #1', description: 'my first thread!', author: u1.id)

Tweet.create(twitter_api_id: '1502673952572854278', tweetthread_id: t1.id, order: 0)
Tweet.create(twitter_api_id: '1504586176232976396', tweetthread_id: t1.id, order: 1)
Tweet.create(twitter_api_id: '1504590603950166019', tweetthread_id: t1.id, order: 2)
