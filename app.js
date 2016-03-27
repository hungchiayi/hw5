var express = require('express');
var app = express();

var port = process.env.PORT || 3000;
var Data=
{
		name:['1','2','3','4','5','6','7','8','9','10','11','12'],
		images:['1','2','3','4','5','6','7','8','9','10','11','12']

}
app.use('/assets',express.static(__dirname + '/public'));
app.set('view engine', 'ejs');

app.use('/', function (req, res, next) {
	console.log('Request Url:' + req.url);
	next();
});

app.get('/', function(req, res) {
	res.render('index',Data);
});

app.listen(port);
