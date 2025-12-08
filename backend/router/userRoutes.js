const express = require('express');
const router = express.Router();
const register = require('../controller/usercontroller.js');

// router.post("/user/register", register);
router.post("/user/register", register);







module.exports = router;