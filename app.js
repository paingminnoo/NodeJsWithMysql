const express = require("express");
const app = express();
app.use(express.json());
const mysql = require("mysql");

var con = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "xzonebet",
});

con.connect(function(err) {
    if (err) throw err;
    console.log("MySql Connected!");
});

app.get("/api/check-versions", (req, res) => {
    con.query(
        "SELECT android_version,ios_version FROM configuration_settings where id = 1",
        function(err, result, fields) {
            if (err) throw err;
            res.send(result[0]);
        }
    );
});

//configuration_settings

app.listen(3000, console.log(`Server is running on port 3000`));