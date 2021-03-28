var express = require('express');
var router = express.Router();
var itemRouter = require("./items")

router.use('/items', itemRouter);

module.exports = router;
