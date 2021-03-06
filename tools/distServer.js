/* eslint-disable no-console */
import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

const port = 3000;
const sourceLocation = 'dist';
const app = express();

app.use(compression());
app.use(express.static(sourceLocation));

app.get('*', (req, res) => res.sendFile(path.join(__dirname, `../${sourceLocation}/index.html`)));

app.listen(port, err => {
  if (err) {
    console.log(err);
  } else {
    open(`http://localhost:${port}`);
  }
});
