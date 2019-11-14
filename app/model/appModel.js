'user strict'

var sql = require('../../db');

//Heart Rate object Constructor

var Heartrate = function(heartrate){
    console.log(heartrate.rate);
    this.RateId = heartrate.id;
    this.Rate = heartrate.rate;
    this.DateTaken = new Date();
}

Heartrate.newHeartRate = function (newRate, result) {
    sql.query("INSERT INTO HeartBeatData set ?", newRate , function (err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            console.log(res.insertId);
            result(null, res.insertId);
        }
    });
};

Heartrate.getRateById = function (hrID, result) {
    sql.query("Select * from HeartBeatData where RateID = ?", hrID, function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Heartrate.getAllRates = function (result) {
    sql.query("Select * from HeartBeatData", function(err, res) {
        if(err) {
            console.log("error", err);
            result(null, err);
        }
        else {
            console.log('HeartRates: ', res);
            result(null, res);
        }
    });
};

Heartrate.updateById = function (id, rate, result){
    console.log(rate);
    sql.query("UPDATE HeartBeatData set Rate = ? WHERE RateID = ?", [rate.rate, id], function(err, res) {
        if(err) {
            console.log("error: ", err);
            result(err, null);
        }
        else{
            result(null, res);
        }
    });
};

Heartrate.removeRate = function(id, result) {
    sql.query("DELETE FROM HeartBeatData WHERE RateID = ?", [id], function(err, res) {
        if(err) {
            console.log("error: ",err)
            result(null, err);
        }
        else{
            result(null, res);
        }
    });
};

module.exports = Heartrate;