var express = require("express");
var router = express.Router();
var itemRouter = require("./items");
var deliveryVehicleRouter = require("./deliveryVehicle");
var orderRouter = require("./order")

router.use("/items", itemRouter);
router.use("/delivery-vehicle", deliveryVehicleRouter);
router.use("/order", orderRouter)


module.exports = router;
