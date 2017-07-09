var express = require('express'); // ExperssJS Framework
var app = express(); // Invoke express to variable for use in application
var port = process.env.PORT || 8080; // Set default port or assign a port in enviornment
var path = require('path'); // Import path modulevar http = require("http");
var bodyParser = require('body-parser');
var request = require('request');
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())



app.use(express.static(__dirname + '/public')); // Allow front end to access public folder

app.post('/run', function (req, res) {
    var myJSONObject = req.body;

    request({
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
        },
        url: "http://api.hackerrank.com/checker/submission.json",
        method: "POST",
        json: true,   // <--Very important!!!
        form: myJSONObject,
    }, function (error, response, body) {
        if(error){
            res.send(error);
        }
        else{
            res.send(body.result);
        }
    });
});



app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname + '/public/index.html')); // Set index.html as layout
});


// Start Server
app.listen(port, function() {
    console.log('Running the server on port ' + port); // Listen on configured port
});
