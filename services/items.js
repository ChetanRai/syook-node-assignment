var itemModel = require("../models/items/model").Item

const insert = async (itemData) => {
    return await itemModel.create(itemData)
}

const getAllItems = async() => {
    return await itemModel.find().sort({_id:-1}).limit(50)
}

module.exports = {
    insert,
    getAllItems
}