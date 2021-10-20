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

const httpProxy = require('http-proxy');
const proxy = httpProxy.createProxyServer({ secure: false });
app.get('/api/artworks', (req, res) => {
  req.url = '/api/v1/artworks';
  proxy.web(req, res, {
    target: `http://api.artic.edu`,
    headers: {
      // The current version of headers was copied 1 to 1 from the request headers of firefox
      'Accept':	'text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,*/*;q=0.8',
      'Accept-Encoding':	'gzip, deflate, br',
      'Accept-Language':	'en-US,en;q=0.5',
      'Connection':	'keep-alive',
      'Host':	'api.artic.edu',
      'Sec-Fetch-Dest':	'document',
      'Sec-Fetch-Mode':	'navigate',
      'Sec-Fetch-Site':	'none',
      'Sec-Fetch-User':	'?1',
      'Upgrade-Insecure-Requests': '1',
      'User-Agent':	'Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:93.0) Gecko/20100101 Firefox/93.0',
    }
  });
});

app.listen(port, () => console.log(`Listening to port ${port}!`));
