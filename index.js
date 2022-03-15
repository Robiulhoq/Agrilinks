const express = require('express')
const app = express()
const port = 5000;
require('dotenv').config();
const bodyParser =  require('body-parser');
app.use(bodyParser.json());
const cors = require('cors')
app.use(cors());
const mongoose = require('mongoose');
const reportHendler = require('./routerHendler/reports')

mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.tx9ov.mongodb.net/Market_reports?retryWrites=true&w=majority`)
.then(()=> console.log('Connection successful'))
.catch(err => console.log(err));
app.use('/reports', reportHendler);

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})