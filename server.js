'use strict';

console.log('Loading server.js');

const pg = require('pg');
const express = require('express');
const app = express();
const PORT = 3000;

const conString = process.env.DATABASE_URL;
pg.defaults.ssl = true;

app.use(express.static('./public'));

function proxyGitHub(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.github.com/${request.params[0]}`,
    headers: {Authorization: `token ${process.env.GITHUB_TOKEN}`}
  }))(request, response);
}

app.get('/github/*', proxyGitHub);

app.get('*', (request, response) => response.sendFile('index.html', {root: './public'}));

app.listen(PORT, function(){
  console.log(`Listening on port ${PORT}`);
});
