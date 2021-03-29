var express = require('express')
var router = express.Router();
var orderControllers = require("../controllers/orders")
var asyncHandler = require('express-async-handler')


router.post('/', asyncHandler(orderControllers.createOrder))
router.post('/deliver', asyncHandler(orderControllers.markOrderDelivered))


module.exports = router;