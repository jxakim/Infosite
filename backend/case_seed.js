const mongoose = require('mongoose');
const Case = require('./models/Case');
require('dotenv').config();

mongoose.connect(process.env.MONGO_URI)
  .then(async () => {
    console.log("Connected to MongoDB");

    await Case.insertMany([
      { Name: "Test", Desc: "This is a test" },
    ]);

    console.log("Case inserted");
    mongoose.disconnect();
  })
  .catch(err => console.error(err));
