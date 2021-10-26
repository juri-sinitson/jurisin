const express = require('express');
const app = express();
const port = 4300;

const https = require('https');

const dist = 'dist/apps/artwork';
const index = {index: "index.html"};

// Run the productive version of your code using the base URL https://localhost:<your port>/
// See also https://expressjs.com/en/starter/static-files.html
app.use('/', express.static(dist, index));

app.get('/images/:id', (req, res) => {
  https.get(`https://www.artic.edu/iiif/2/${req.params.id}/full/843,/0/default.jpg`,
  remoteRes => remoteRes.pipe(res));
});

const proxyBase = 'api.artic.edu';

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({ secure: false });
app.get('/api/artworks', (req, res) => {
  req.url = '/api/v1/artworks';
  proxy.web(req, res, {
    target: `https://${proxyBase}`,
    headers: {
      ...req.headers,
      // These headers were copied from the request headers of firefox
      host:	proxyBase,
    }
  });
});

app.listen(port, () => console.log(`Listening to port ${port}!`));
