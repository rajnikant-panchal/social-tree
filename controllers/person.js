var person = require('../models/person');

//Simple version, without validation or sanitation
exports.add = function (req,res){
    res.json({"firstname": req.body.firstname, "lastname": req.body.lastname});
   var data = new person.Person(req.body.firstname,req.body.lastname);
   console.log("data");
   console.log(data);
   person.add(data);
};