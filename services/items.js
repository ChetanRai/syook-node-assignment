var {Item: itemModel} = require("../models/items/model")

const insert = async (itemData) => {
    return await itemModel.create(itemData)
}

const getItem = async(itemId) => {
    return await itemModel.findOne({itemId})
}

const getAllItems = async() => {
    return await itemModel.find().sort({_id:-1}).limit(50)
}

const updateItem = async(itemId, data) => {
    return await itemModel.findOneAndUpdate({itemId}, {$set: data}, {new:true})
}

module.exports = {
    insert,
    getItem,
    getAllItems,
    updateItem
}