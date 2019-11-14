'user strict';

var mysql = require('mysql');

//server mysql db connection
var conn = mysql.createConnection({
    host: "216.70.112.49",
    user: "heartbeat",
    password: "t3st_h3@rT",
    database: "heartbeat_"
});

conn.connect(function(err) {
    if (err) throw err;
});

module.exports = conn;