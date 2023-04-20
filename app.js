var express = require('express');
var bodyParser = require('body-parser');
const port = process.env.PORT || 8080;

const professionalRoutes = require('./routes/professional');

var app = express();

app.use(bodyParser.json());

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    next();
  });
  

app.use('/professional', professionalRoutes);

app.listen(port, () => {
    console.log(`Server is running on Port ${port}`);
})
