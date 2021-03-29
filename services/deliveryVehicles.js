var {
  DeliveryVehicles: deliveryVehicleModel,
} = require("../models/deliveryVehicles/model");

const insert = async (deliveryVehicleData) => {
  return await deliveryVehicleModel.create(deliveryVehicleData);
};

const getDeliveryVehicle = async (registrationNumber) => {
  return await deliveryVehicleModel.findOne({ registrationNumber });
};

const getAvailableDeliveryVehicleForCity = async (city) => {
  const data = await deliveryVehicleModel
    .find({ city, activeOrdersCount: { $lte: 1 } })
    .sort({ activeOrdersCount: 1 })
    .limit(1)
    return data.pop()
};

const getAllDeliveryVehicles = async () => {
  return await deliveryVehicleModel.find().sort({ _id: -1 }).limit(50);
};

const updateDeliveryVehicle = async (registrationNumber, data) => {
  return await deliveryVehicleModel.findOneAndUpdate(
    { registrationNumber },
    { $set: data },
    { new: true }
  );
};

const incrementActiveOrder = async (registrationNumber) => {
  return await deliveryVehicleModel.updateOne(
    { registrationNumber },
    { $inc: { activeOrdersCount: 1 } }
  );
};

const decrementActiveOrder = async (registrationNumber) => {
  return await deliveryVehicleModel.updateOne(
    { registrationNumber },
    { $inc: { activeOrdersCount: -1 } }
  );
};

module.exports = {
  insert,
  getDeliveryVehicle,
  getAllDeliveryVehicles,
  updateDeliveryVehicle,
  incrementActiveOrder,
  decrementActiveOrder,
  getAvailableDeliveryVehicleForCity,
};
