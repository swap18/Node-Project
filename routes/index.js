var express = require('express');
var router = express.Router();
const user = require('./userRoutes')



router.use('/', user);

module.exports = router;
