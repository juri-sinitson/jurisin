const express = require('express');
const app = express();

const port = 4300;

app.get('/api/v1/artworks', (req, res) => {
  const data = require('./artworks.json');
  res.json(data.data);
});

// Trying to proxy to the Live server, with no success.
// Although the url https://api.artic.edu/api/v1/artworks works int the browser.
// You may try to copy all the headers from the browser that there is no difference
// between the browser an the local backend request. You may also try to make a request
// in postman or similar software first.
/*const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({ secure: false });
app.get('/api/v1/artworks', (req, res) => {
  proxy.web(req, res, { target: `http://api.artic.edu` });
});*/
/*app.use('/api/v1/artworks', proxy2('https://api.artic.edu/api/v1/artworks', {
  https: true
}));*/

app.listen(port, () => console.log(`Listening to port ${port}!`));
