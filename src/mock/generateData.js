var faker = require('faker');

var database = {friends: [], newsFeed: []};


for (var i = 1; i <= 15; i++) {
  const feeds = [];
  for (var j = 1; j <= 20; j++) {
    if (j % 11 === 0) {
      feeds.push({
        id: j,
        type: 'add',
        date: faker.date.past(),
        friend: {
          fullName: faker.name.findName(),
          avatar: faker.image.avatar(),
        },
      });
    }
    if (j % 7 === 0) {
      feeds.push({
        id: j,
        type: 'like',
        date: faker.date.past(),
        post: {
          title: faker.random.word(),
          owner: faker.name.findName(),
          avatar: faker.image.avatar(),
        },
      });
    }
    if (j % 5 === 0) {
      feeds.push({
        id: j,
        type: 'upload',
        date: faker.date.past(),
        uploadImage: faker.image.city(),
      });
    }
  }
  database.friends.push({
    id: i,
    fullName: faker.name.findName(),
    connected: faker.date.past(),
    avatar: faker.image.avatar(),
    newsFeed: feeds,
  });
}

console.log(JSON.stringify(database));
