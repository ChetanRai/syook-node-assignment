var DeliveryVehicleService = require("../services/deliveryVehicles");

const createDeliveryVehicle = async (req, res, next) => {
  const { vehicleType, city } = req.body;
  const data = await DeliveryVehicleService.insert({ vehicleType, city });
  res.status(200).json({ message: "delivery vehicle created", data });
};

const getDeliveryVehicle = async (req, res, next) => {
  const registrationNumber = req.query.registrationNumber;
  const data = await DeliveryVehicleService.getDeliveryVehicle(
    registrationNumber
  );
  res.status(200).json({ data: data });
};

const getDeliveryVehicleList = async (req, res, next) => {
  const data = await DeliveryVehicleService.getAllDeliveryVehicles();
  res.status(200).json({ data: data });
};

const updateDeliveryVehicle = async (req, res, next) => {
  const registrationNumber = req.params.registrationNumber;
  const { city } = req.body;
  const data = await DeliveryVehicleService.updateDeliveryVehicle(
    registrationNumber,
    { city }
  );
  res.status(200).json({ message: "item updated", data });
};

module.exports = {
  createDeliveryVehicle,
  getDeliveryVehicle,
  getDeliveryVehicleList,
  updateDeliveryVehicle,
};
