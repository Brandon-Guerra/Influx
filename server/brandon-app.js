
var express = require('express');
var app = express();
var mysql = require('mysql');
var connection = mysql.createPool({
	host	 : 'localhost',
	user	 : 'root',
	password : 'jaubert8',
	database : 'influx'
});

app.get("/merchant",function(req,res){
	connection.getConnection(function(err, connection) {
		if(err) {
			console.error('Connection error: ', err);
		}
		else {
			connection.query('SELECT * from merchant', function(err, rows, fields) {
				res.send(rows);
				connection.release();
			});
		}
	});
});

app.get("/transaction",function(req,res){
	connection.getConnection(function(err, connection) {
		// var time = new Date();
		// lastHourTime = time;
		// var hourBefore = time.getUTCHours() - 2;
		// console.log(hourBefore);
		// lastHourTime.setHours(hourBefore);
		// time = time.toMysqlFormat();
		// lastHourTime = lastHourTime.toMysqlFormat();
		// console.log(time + lastHourTime);
		if(err) {
			console.error('Connection error: ', err);
		}
		else {
			connection.query('SELECT  COUNT(id) AS freq FROM transaction', function(err, rows, fields) {
				n = (rows[0].freq);
				number_of_transactions = '{"tranactions": n}';
				res.sendStatus(number_of_transactions);
				connection.release();
			});
		}
	});
});

var server = app.listen(process.env.VCAP_APP_PORT || 3000, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});

Date.prototype.toMysqlFormat = function() {
    return this.getUTCFullYear() + "-" + twoDigits(1 + this.getUTCMonth()) + "-" + twoDigits(this.getUTCDate()) + " " + twoDigits(this.getUTCHours()) + ":" + twoDigits(this.getUTCMinutes()) + ":" + twoDigits(this.getUTCSeconds());
};

function twoDigits(d) {
    if(0 <= d && d < 10) return "0" + d.toString();
    if(-10 < d && d < 0) return "-0" + (-1*d).toString();
    return d.toString();
}