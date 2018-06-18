var mysqlConn = require("../index");

exports.Person = class Person {
    constructor(firstname, lastname) {
        this.firstname = firstname;
        this.lastname = lastname;
      }
}

exports.add =function(person){ 

    mysqlConn.pool.getConnection(function(err,con) {
    if (err) throw err;
    console.log("Connected!");
    var sql = "INSERT INTO person (firstname, lastname) VALUES ?";
    var values = [[person.firstname,person.lastname]];
    con.query(sql, [values], function (err, result) {
      con.release();  
      if (err) throw err;
      console.log("Number of records inserted: " + result.affectedRows);
    });
  })
};
