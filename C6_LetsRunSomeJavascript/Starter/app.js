const moment = require('moment');
const http = require('http');
const fs = require('fs');
const express = require('express');
const app = express();

const port = process.env.PORT || 3000;


app.get('/', (req, res)=>{
  res.render('index.html')
})
app.get('/api', (req, res)=> {
  res.json({firstname: 'john', lastname: 'doe'})
})
app.get('/person/:id', (req, res)=> {
  res.send('<h1>hey ' + req.params.id + '</h1>')
})
app.listen(port);
// http.createServer(function(req, res) {
//   if (req.url === '/') {
//     fs.createReadStream(__dirname + '/index.html').pipe(res)
//   } else if (req.url === '/api') {
//     res.writeHead(200, {
//       'Content-Type': 'application/json'
//     });
//     let obj = {
//       firstname: 'John',
//       lastname: 'Doe'
//     };
//     res.end(JSON.stringify(obj));
//   } else {
//     res.writeHead(404);
//     res.end()
//   }
// }).listen(3000, '127.0.0.1');
