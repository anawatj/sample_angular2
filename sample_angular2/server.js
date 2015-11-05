var express = require('express');
var bodyParser  = require('body-parser');
var path = require('path');
var homes = require('./webapp/controllers/homeController');
var masters = require('./webapp/controllers/masterController');
var app = express();
app.get('/', function (req, res) {
  res.send('Hello World!');
});
app.use('/master',masters);
app.use('/home',homes);
app.use("/public", express.static(path.join(__dirname, 'public')));
app.use("/node_modules",express.static(path.join(__dirname,"node_modules")));
app.set('views', __dirname + '/webapp/views');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
var server = app.listen(9000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});