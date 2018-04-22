const {MongoClient, ObjectID} = require('mongodb');
7
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').find({
  //   _id: new ObjectID('5adc4476ef2c8e672d44f099')
  // }).toArray().then((docs) => {
  //   console.log('Todos');
  //   console.log(JSON.stringify(docs, undefined, 2));
  // }, (err) => {
  //   console.log('Unable to fetch todos', err);
  // });

  // db.collection('Todos').count().then((count) => {
  //   console.log(`Todos count: ${count}`);
  // }, (err) => {
  //   console.log('Unable to fetch count', err);
  // })

  db.collection('Users').find({
    name: 'Shashank'
  }).toArray().then((users) => {
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users', err);
  });

  //db.close();
});
