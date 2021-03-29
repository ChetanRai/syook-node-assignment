var { Order: orderModel } = require("../models/order/model");

const getOrder = async (orderNumber) => {
  return await orderModel.findOne({ orderNumber });
};

const insert = async (orderData) => {
  return await orderModel.create(orderData);
};

const markOrderDelivered = async(orderNumber) => {
  return await orderModel.updateOne({orderNumber}, {$set: {isDelivered:true}})
}

module.exports = {
  getOrder,
  insert,
  markOrderDelivered
};
