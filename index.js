const express = require('express');
const bodyParser = require('body-parser');

// create express app
const app = express();

var person = require('./routes/person');
var mysql = require('mysql');

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }))

// parse requests of content-type - application/json
app.use(bodyParser.json())

// define a simple route
app.get('/', (req, res) => {
    res.sendFile(__dirname + '/views/index.html')
});

app.use('/person', person);

// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});

app.get('/quit', function(req,res) {
    res.send('closing..');
    pool.end();
 });

var pool  = mysql.createPool({
    connectionLimit : 10,
    host            : 'localhost',
    user            : 'root',
    password        : 'root',
    database        : 'socialtree'
  });


 exports.pool = pool

