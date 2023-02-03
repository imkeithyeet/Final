# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).


User.destroy_all
Match.destroy_all
Photo.destroy_all
Message.destroy_all

puts "Seeding users..."
u1 = User.create(first_name:"Beverly",last_name:"Zhu", email: 'Bzhu@gmail.com', password: "skating123", gender: "Female", age:"20",occupation: "Figure Skater", location: "Los Angeles California", bio: "I love figure skating and spending time with friends that pushes me to do more in life.", horoscope: "Gemini")
u2 = User.create(first_name:"Keith",last_name:"Ma", email: 'yeser@gmail.com', password: "yam123", gender: "Male", age:"26", occupation: "Student",location: "Los Angeles California", bio: "A down to earth guy that doesn't give into other peoples thoughts.", horoscope: "Gemini")
u3 = User.create(first_name:"Rich",last_name:"Brian", email: 'Rich@gmail.com', password: "Datstick", gender: "  Male", age:"23", occupation: "Rapper",location: "Jakarta Indonesia", bio: "I am rapper that has started from youtube and now became an internet sensation that many love.", horoscope: "Virgo")
u4 = User.create(first_name:"Belle",last_name:"Delphine", email: 'bathwater@gmail.com', password: "youtube69", gender: "Female", age:"26", occupation: "Streamer",location: "United Kingdom", bio: "International streamer on youtube and onlyfans enthusiasts.", horoscope: "Leo")
u5 = User.create(first_name:"Sam",last_name:"Smith", email: 'sam123@gmail.com', password: "sam123", gender: "Them", age:"30",occupation: "Singer", location: "London", bio: "Sup everyone i love to sing for my fans and make music that expresses who i am as a person.", horoscope: "Taurus")
u6 = User.create(first_name:"Bryan",last_name:"Kim", email: 'yessir@gmail.com', password: "bet420", gender: "Male", age:"26", occupation: "Engineer",location: "Los Angeles California", bio: "Big partygoer that loves to go out and have some fun.", horoscope: "Libra")
u7 = User.create(first_name:"Max",last_name:"Anderson", email: 'spider@gmail.com', password: "yoda2007", gender: "Male", age:"26",occupation: "Unemployed", location: "Los Angeles California", bio: "Big gamer that uses twitch to stream my games to viewers.", horoscope: "Scorpio")
u8 = User.create(first_name:"Leana",last_name:"Deeb", email: 'gymshark@gmail.com', password: "fitness1997", gender: "Female", age:"25",occupation: "Fitness Trainer", location: "Seattle", bio: "A full time fitness trainer that loves healthy living and taking risks.", horoscope: "Aries")



puts "Seeding matches..."
m1 = Match.create(user_1_id: u1.id, user_2_id: u2.id, is_match: true)
m2 = Match.create(user_1_id: u4.id, user_2_id: u6.id, is_match: false)
m3 = Match.create(user_1_id: u5.id, user_2_id: u7.id, is_match: true)
m4 = Match.create(user_1_id: u6, user_2_id: u8.id, is_match: true)
m5 = Match.create(user_1_id: u1.id, user_2_id: u7.id, is_match: false)
m5 = Match.create(user_1_id: u3.id, user_2_id: u4.id, is_match: true)





puts "Seeding photos..."
p1 = Photo.create(image_url: 'https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/2022/02/11/ade01cd6-4d97-4f76-a9cb-22020e2d1c76_a21ac38f.jpg?itok=Fb3hVG0n', image_url2:"https://nypost.com/wp-content/uploads/sites/2/2022/02/beverly-zhu-04.jpg?quality=90&strip=all", user:u1 )
p2 = Photo.create(image_url: 'https://scontent-lax3-2.xx.fbcdn.net/v/t39.30808-6/311277207_6469315576415453_9136998682385603383_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=t2X9LdsQ4LgAX8AQl4g&tn=V18h6iVdFoc98ezc&_nc_ht=scontent-lax3-2.xx&oh=00_AfA9jBIAXTZcTAyqLAB6KQfbb-qszw9FDzW2ZwzITCj1VA&oe=63E01F85',
image_url2:"https://scontent-lax3-1.xx.fbcdn.net/v/t39.30808-6/261358684_5439077109439310_5841458662666541190_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CNZYzt8fl8MAX9lBOj7&_nc_ht=scontent-lax3-1.xx&oh=00_AfC4iIETheqMpD8T3DVW411GDvfZQr6PHBFFEr6ghnoHLQ&oe=63DF3BD1", user:u2 )
p3 = Photo.create(image_url: 'https://img.jakpost.net/c/2020/04/11/2020_04_11_92465_1586599791._large.jpg', image_url2:"https://static.hiphopdx.com/2021/09/Rich-Brian-10M-Spotify_1280x720_09062021-1200x675.jpg", user:u3 )
p4 = Photo.create(image_url: 'https://i.kym-cdn.com/entries/icons/original/000/031/397/dlephinearresttted.jpg', image_url2:"https://preview.redd.it/b8uc64b8ee791.jpg?width=640&crop=smart&auto=webp&s=c0c211b72739032eb31adfe7cf5dd16392aa5349", user:u4 )
p5 = Photo.create(image_url: 'https://people.com/thmb/6VLsYmWN9hivx9nT2x6tmEVfPlg=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc():focal(749x0:751x2)/Sam-Smith-71-08092022-8eb0f75b82d14c829e4b9a75ce14b0b0.jpg', 
image_url2:"https://static01.nyt.com/images/2023/01/27/multimedia/26SMITH-REVIEW-02-vpfg/26SMITH-REVIEW-02-vpfg-articleLarge.jpg?quality=75&auto=webp&disable=upscale", user:u5 )
p6 = Photo.create(image_url: 'https://media.istockphoto.com/id/1288538088/photo/portrait-young-confident-smart-asian-businessman-look-at-camera-and-smile.jpg?s=612x612&w=0&k=20&c=qkOwVHZFC-fbtbTnufVGaXFhnQBcfEjzbu5ThSXVLR0=', image_url2:"https://d3fg8lkx8f5xs7.cloudfront.net/825499700346384384", user:u6 )
p7 = Photo.create(image_url: 'https://images.squarespace-cdn.com/content/v1/5a30b5abdc2b4ab3bb9fc264/1593675130227-C3H2TDF4DKMKAUSRUPWM/maxanderson.jpg', image_url2:"https://pbs.twimg.com/profile_images/632715182863712256/qd9NCS3W_400x400.jpg", user:u7 )
p8 = Photo.create(image_url: 'https://cdn.shopify.com/s/files/1/0560/4189/8081/files/IMAGE_5.jpg?v=1669151761&width=1500', image_url2:"https://i.pinimg.com/736x/0f/ce/90/0fce9069b71589fda32847817775e4b0.jpg", user:u8 )



puts "Seeding messages..."
ms1 = Message.create(body: "",  sender_id: u2.id, recipient_id: u1.id)
ms2 = Message.create(body: "",  sender_id: u5.id, recipient_id: u7.id)
ms3 = Message.create(body: "",  sender_id: u6.id, recipient_id: u8.id)
ms4 = Message.create(body: "",  sender_id: u3.id, recipient_id: u4.id)




puts "✅ Done seeding!"