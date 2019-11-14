'use strict'

module.exports = function(app) {
    var heartRate = require('../controller/appController');

    //heartrate Routes
    app.route('/api/heartrates')
        .get(heartRate.get_all_rates)
        .post(heartRate.add_a_heartrate);

    app.route('/api/heartrates/:rateId')
        .get(heartRate.get_a_heartrate)
        .put(heartRate.update_a_heartrate)
        .delete(heartRate.delete_a_heartrate);    
};   