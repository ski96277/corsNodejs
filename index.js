var express = require('express')
var cors = require('cors')
var axios = require('axios');

var app = express()

app.use(cors())

app.get('/search/location/', function (req,res) {
  
  axios.get(`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${req.query.keyword}&language=en&types=%28cities%29&key=AIzaSyC6uIY9MX95TTQ3FLJBWssoDvECxrYtLmY&sessiontoken=d241dc69-fa20-49a8-b658-89adb2dd5ec4`)
.then(function(response) {
    console.log(response.data);
    // console.log(response.status);
    // console.log(response.statusText);
    // console.log(response.headers);
    // console.log(response.config);
    res.json({data:response.data,
      statusCode:200,
      message:""
    })


});

})

app.listen(80, function () {
  console.log('CORS-enabled web server listening on port 80')
}) 