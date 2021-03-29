var OrderService = require("../services/orders.js");
var CustomerService = require("../services/customer.js");
var ItemService = require("../services/items.js");
var DeliverVehicleService = require("../services/deliveryVehicles.js");

const createOrder = async (req, res, next) => {
  const { customerDetails, itemId } = req.body;

  const customer = await fetchOrRegisterCustomer(customerDetails);

  if (!customer) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Customer details" });
  }

  const item = await fetchItem(itemId);

  if (!item) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Item details" });
  }

  const deliveryVehicle = await fetchDeliveryVehicle(customer.city);

  if (!deliveryVehicle) {
    return res
      .status(400)
      .json({
        success: false,
        message: "No delivery vehicle available in your city",
      });
  }

  await DeliverVehicleService.incrementActiveOrder(
    deliveryVehicle.registrationNumber
  );

  const data = await OrderService.insert({
    itemId,
    price: item.price,
    customerId: customer.customerId,
    deliveryVehicleRegNo: deliveryVehicle.registrationNumber,
    isDelivered: false,
  });

  res.status(200).json({
    message: "Order created",
    success: true,
    data: {
      customer: {
        name: customer.name,
        city: customer.city,
        id: customer.customerId,
      },
      item: {
        name: item.name,
        price: item.price,
      },
      deliveryVehicle: {
        registrationNumber: deliveryVehicle.registrationNumber,
        type: deliveryVehicle.vehicleType,
      },
      invoiceId: data.invoiceId,
      orderNumber: data.orderNumber
    },
  });
};

const fetchOrRegisterCustomer = async (customerDetails) => {
  if (customerDetails.id) {
    return await CustomerService.getCustomer(customerDetails.id);
  }
  if (customerDetails.name && customerDetails.city) {
    return await CustomerService.insert(customerDetails);
  }
};

const fetchItem = async (itemId) => {
  if (itemId) {
    return await ItemService.getItem(itemId);
  }
};

const fetchDeliveryVehicle = async (city) => {
  return await DeliverVehicleService.getAvailableDeliveryVehicleForCity(city);
};

const markOrderDelivered = async (req, res, next) => {
  const { orderId } = req.body;
  const order = await OrderService.getOrder(orderId);
  if (!order) {
    return res
      .status(400)
      .json({
        success: false,
        message: "No delivery vehicle available in your city",
      });
  }
  if (order.isDelivered) {
    return res
      .status(400)
      .json({ success: false, message: "Order was already delivered" });
  }
  await OrderService.markOrderDelivered(order.orderNumber)
  await DeliverVehicleService.decrementActiveOrder(order.deliveryVehicleRegNo);
  res.status(200).json({ message: "Order created", success: true });
};

module.exports = {
  createOrder,
  markOrderDelivered,
};
