const express  = require('express');
const router = express.Router();
const getHandlecreate = require("../controller/route.js");

router.post("/user" , getHandlecreate);




module.exports = router;