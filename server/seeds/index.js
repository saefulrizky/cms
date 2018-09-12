// Connecting to the database
const Datadate = require("../models/datadate");
const fs = require('fs');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/cms',{
  useNewUrlParser: true
}).then((err)=>{
  console.log("Successfully connected to the database");
}).catch(err=>{
  console.log("Could not connect to database");
  process.exit();
})

let data = fs.readFileSync('data.json', 'utf8');

console.log(data);
