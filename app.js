var express = require('express');
var app = express();
var cors = require('cors');
var bodyParser = require('body-parser');

// Enable All Cors Requests
app.use(cors());

app.get('/', function (req, res) {
  res.send('Hello!');
});

app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.raw({ type: 'audio/wav', limit: '50mb' }));

app.post('/record', function(req, res){
  console.log("RECIEVED AUDIO TO EXTRACT INDICATORS: ", req.body);
  res.send('success');
});

var server = app.listen(3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});



// // Google Cloud
// var gcloud = require('gcloud');

// var storage = gcloud.storage({
//   projectId: 'opinionations-1087'
// });

// // Reference an existing bucket.
// var bucket = storage.bucket('opinionations');

// // Upload a local file to a new file to be created in your bucket.
// bucket.upload('file.txt', {destination: 'file.txt'}, function(err, file) {
//   console.log('uploaded');
// });