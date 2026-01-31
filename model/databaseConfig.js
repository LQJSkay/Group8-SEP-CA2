var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Aataviuskadenng2001",
            database: "sep"
        });
        return conn;
    }
};
module.exports = dbconnect