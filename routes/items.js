var express = require('express');
var router = express.Router();
var itemsControllers = require("../controllers/items")
var asyncHandler = require('express-async-handler')

// create item
router.post('/', asyncHandler(itemsControllers.createItem));
router.get('/list', asyncHandler(itemsControllers.getItemsList));

// get item

// get items list

// update item

module.exports = router;
