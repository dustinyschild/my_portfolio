'use strict';

console.log('Loading server.js');

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.get('*', function(request, response){
  console.log('This runs correctly');
  response.sendFile('public/index.html', {root: '.'});
});

app.listen(PORT, function(){
  console.log('Listening');
});
