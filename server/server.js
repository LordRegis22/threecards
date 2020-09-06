const express = require('express');
const app = express();
const path = require('path');

const PORT = 2222;

app.use(express.json());

app.use('/', express.static(path.resolve(__dirname, '../client')));

app.use((req, res) => {
  res.status(404).send("Can't find anything here!");
});

app.use((err, req, res, next) => {
  //global error handling here
  const defaultErr = {
    log: 'Global error handler caught unknown middleware error',
    status: 400,
    message: { err: 'An error occurred in middleware' },
  };
  let errorObj = Object.assign({}, defaultErr);
  errorObj.message.err = err;
  console.log(errorObj.log, errorObj.message);
  return res.status(errorObj.status).json(errorObj.message);
});
app.listen(PORT, console.log(`listening on ${PORT}`));
