var express = require('express');
var router = express.Router();
var deliveryVehicleControllers = require("../controllers/deliveryVehicle")
var asyncHandler = require('express-async-handler')


router.post('/', asyncHandler(deliveryVehicleControllers.createDeliveryVehicle));
router.get('/', asyncHandler(deliveryVehicleControllers.getDeliveryVehicle));
router.get('/list', asyncHandler(deliveryVehicleControllers.getDeliveryVehicleList));
router.patch('/:registrationNumber', asyncHandler(deliveryVehicleControllers.updateDeliveryVehicle));




module.exports = router;