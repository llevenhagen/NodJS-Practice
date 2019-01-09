const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection;
const port = process.env.PORT || 3000;
const seedController = require('./controllers/seed.js');
const apiController = require('./controllers/api.js')
app.use(express.static('public'));

const MONGODB_URI = 'mongodb://localhost:27017/' + 'nodetodos'

mongoose.connect(MONGODB_URI, {useNewUrlParser: true});


db.on('error', (err)=> console.log(err.message + 'is Mongod not running?'));
db.on('connected', ()=> ('mongo connected: ', MONGODB_URI));
db.on('disconnected', ()=> console.log('mongo disconnected'));

db.on('open', ()=> {console.log('connection made')});

seedController(app);
apiController(app);

app.listen(port);
