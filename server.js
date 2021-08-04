'use strict';

//bring in express
const express = require('express');
const app = express();

//allow frontend to access data from backend with CORS
const cors = require('cors');
app.use(cors());


// use dotenv to access our .env file
require('dotenv').config();

const PORT = process.env.PORT;

app.get('/banana', (req, res) => {
  res.send('It\'s bananas.  B. A. N. A. N. A. S.');
});



app.listen(PORT, () => console.log(`listening on port ${PORT}`));
