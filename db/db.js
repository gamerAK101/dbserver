let mysql = require('mysql');

let connection = {
host :"localhost",
user : "root",
password : "aliBaba1to3",
database : "ReadyAssist"
};


let con = mysql.createConnection(connection)

let sql = "select * from candidates;"

    con.query(sql, function(err, data, fields)
    {
        if(err)throw err;
        console.log("Running fine", data);
    });

    con.end();