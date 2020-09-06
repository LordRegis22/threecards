const express = require('express');
const app = express();
const path = require('path');

const PORT = 2222;

app.use(express.json());

app.use('/', express.static(path.resolve(__dirname, '../client')));

app.use((req, res) => {
  res.status(404).send("Can't find anything here!");
});
app.listen(PORT, console.log(`listening on ${PORT}`));
