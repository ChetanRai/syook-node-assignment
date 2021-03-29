var ItemService = require('../services/items')


const createItem = async (req, res, next) => {
    const { name, price } = req.body
    const data = await ItemService.insert({name, price})
    res.status(200).json({message:'item created', data})
}

const getItem = async (req, res, next) => {
    const itemId = Number(req.query.itemId)
    const data = await ItemService.getItem(itemId)
    res.status(200).json({data:data})
}

const getItemsList = async (req, res, next) => {
    const data = await ItemService.getAllItems()
    res.status(200).json({data:data})
}

const updateItem = async(req, res, next) => {
    const itemId = Number(req.params.itemId)
    const {name, price} = req.body
    const data = await ItemService.updateItem(itemId, {name, price})
    res.status(200).json({message:'item updated', data})
}

module.exports = {
    createItem,
    getItem,
    getItemsList,
    updateItem
}
