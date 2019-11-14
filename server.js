var express = require('express');
var cors = require('cors');
app = express();
bodyParser = require('body-parser');
port = process.env.PORT || 3000;

const mysql = require('mysql');

//connection config
const mc = mysql.createConnection({
    host: "216.70.112.49",
    user: "heartbeat",
    password: "t3st_h3@rT",
    database: "heartbeat_"
});

mc.connect();
app.use(cors());
app.listen(port);

console.log('API server started on: ' + port);


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./app/routes/appRoutes') //importing route
routes(app);