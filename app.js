var express = require('express');
var bodyParser = require('body-parser');

var app = express();
var port = process.env.PORT || 1337;

// body parser middleware
app.use(bodyParser.urlencoded({ extended: true }));

// test route
app.get('/', function (req, res) { res.status(200).send('Hello world!'); });

app.listen(port, function () {
  console.log('Listening on port ' + port);
});

app.post('/rap', function (req, res, next) {
  var userName = req.body.user_name;
  var botPayload = {
    text : 'We are Phat & Fire. About to spit some fire beats'
  };

app.post('/fire', function (req, res, next) {
    var userName = req.body.user_name;
    var botPayload = {
      text : 'Fire fire fire'
    };


  // Loop otherwise..
  if (userName !== 'slackbot') {
    return res.status(200).json(botPayload);
  } else {
    return res.status(200).end();
  }
});
