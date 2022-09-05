const express = require('express');
const app = express();
app.use(express.json());
const mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "xzonebet"
});

con.connect(function(err) {
    if (err) throw err;
    con.query("SELECT * FROM configuration_settings", function(err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});


app.listen(3000, console.log(`Server is running on port 3000`));