var { Customer: customerModel } = require("../models/customers/model");

const getCustomer = async (customerId) => {
  return await customerModel.findOne({ customerId });
};

const insert = async (customerData) => {
  return await customerModel.create(customerData);
};

module.exports = {
  getCustomer,
  insert,
};
