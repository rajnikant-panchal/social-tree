var express = require('express');
var router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
var person_controller = require('../controllers/person');


// a simple test url to check that all of our files are communicating correctly.
router.post('/add', person_controller.add);

module.exports = router;