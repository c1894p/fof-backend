const mongoose = require("mongoose");

mongoose
    .connect('mongodb://localhost:27017/fof', {
    useNewUrlParser: true, 
    useUnifiedTopology: true})
    .then(instance => {
        console.log(`Connected to MongoDB: ${instance.connections[0].name}`);
      })
      .catch(err => {
        console.log('Connection Failed!', err);
      });

module.exports = mongoose;