'use strict';

var Heartrate = require('../model/appModel.js');

exports.get_all_rates = function(req, res) {
    Heartrate.getAllRates(function(err, rate) {

        console.log('controller')
        if(err){ 
            res.send(err);
            console.log('res', rate);
        }else{
            res.send(rate);
        }    
    });
};

exports.add_a_heartrate = function(req, res) {
   // console.log(req.body);
    var new_rate = new Heartrate(req.body);
    
    //handles null error
    if(!new_rate.RateId || !new_rate.Rate){
        res.status(400).send({ error:true, message: 'Please provide RateID/Rate'});
    }
    else{
        Heartrate.newHeartRate(new_rate, function(err, rate) {
            if(err){
                res.send(err);
            }
            else{
                res.json(rate);
            }
        });
    }
};

exports.get_a_heartrate = function(req, res) {
    Heartrate.getRateById(req.params.rateId, function(err, rate) {
        if(err){
            res.send(err);
        }else{
            res.json(rate);
        }
    });
};

exports.update_a_heartrate = function(req, res) {
    Heartrate.updateById(req.params.rateId, new Heartrate(req.body), function(err, rate) {
        if(err){
            res.send(err);
        }else{
            res.json(rate);
        }
    });
};

exports.delete_a_heartrate = function(req, res) {
    Heartrate.removeRate(req.params.rateId, function(err, rate) {
        if(err){
            res.send(err);
        }else {
            res.json({ message: 'Heart Rate successfully deleted'});
        }
    });
};