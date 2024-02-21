let express=require('express')
const mongoose = require('mongoose');
let cors=require('cors'); 
const routes = require('./App/router');

let server=express();

server.use(cors())
server.use(express.json())
server.use(routes)

mongoose.connect('mongodb://127.0.0.1:27017/test')
  .then(() => {
    server.listen("8000")
    console.log('Connected!')
  });