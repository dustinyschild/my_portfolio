'use strict';

console.log('Loading server.js');

const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.static('./public'));

app.get('*', function(request, response){
  response.sendFile('index.html', {root: './public'});
});

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
