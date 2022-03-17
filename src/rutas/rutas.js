const express = require("express");
const res = require("express/lib/response");
const controles = require("../controles/controles");

const router = express.Router(); 


router.post('/users', controles.users);


module.exports = router;