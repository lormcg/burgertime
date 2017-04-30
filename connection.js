var mysql = require('mysql');

var connection = mysql.createConnection({
	host: 'localhost',
	user: '',
	password: '',
	database: 'burgers_db'
});

connection.connect(function(err) {
  if (err) {
    console.err("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
