const express = require('express');
const app = express();
const path = require('path');

const port = 4300;

const dist = 'dist/apps/artwork';
const index = {index: "index.html"};

// Run the productive version of your code using the base URL https://localhost:<your port>/
// See also https://expressjs.com/en/starter/static-files.html
app.use('/', express.static(dist, index));

app.get('/api/artworks', (req, res) => {
  const data = require('../../../../../libs/artwork/api/src/assets/artworks.json');
  res.json(data.data);
});

app.get('/images/:id', (req, res) => {
  res.sendFile(`${req.url}.jpg`, {root: `${path.join(__dirname)}/../../../../../libs/artwork/api/src/assets/`});
});

app.listen(port, () => console.log(`Listening to port ${port}!`));
