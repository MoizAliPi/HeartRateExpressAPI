const request = require('request');

// request.get("http://heartbeat.lifespantest.com/api/heartrates", function(err, res, body) {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`statusCode: ${res.statusCode}`);
//         console.log(body);
//     }
// });

// request.get("http://heartbeat.lifespantest.com/api/heartrates/7", function(err, res, body) {
//     if(err){
//         console.log(err);
//     }
//     else{
//         console.log(`statusCode: ${res.statusCode}`);
//         console.log(body);
//     }
// });


// request.post('http://heartbeat.lifespantest.com/api/heartrates', {
//   json: {
//         "RateID":12,
//         "Rate":75
//     }
// }, (error, res, body) => {
//   if (error) {
//     console.error(error);
//     return
//   }
//   console.log(`statusCode: ${res.statusCode}`);
//   console.log(body);
// });

request.delete('http://heartbeat.lifespantest.com/api/heartrates/7', function(err, res, body) {
    if(err){
        console.log(err);
    }
    else{
        console.log(`statusCode: ${res.statusCode}`);
        console.log(body);
    }
});