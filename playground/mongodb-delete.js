const {MongoClient, ObjectID} = require('mongodb');
7
MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  // db.collection('Todos').deleteMany({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todos', err);
  // });

  // db.collection('Todos').deleteOne({
  //   text: 'Eat lunch'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // db.collection('Todos').findOneAndDelete({
  //   completed: false
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete todo', err);
  // });

  // db.collection('Users').deleteMany({
  //   name: 'Ravi'
  // }).then((result) => {
  //   console.log(result);
  // }, (err) => {
  //   console.log('Unable to delete user', err);
  // });

  db.collection('Users').findOneAndDelete({
    _id: new ObjectID('5adc4668c5498166f1d4bb09')
  }).then((result) => {
    console.log(result);
  }, (err) => {
    console.log('Unable to delete user', err);
  });

  //db.close();
});
