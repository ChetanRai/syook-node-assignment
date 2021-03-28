var express = require('express');
var ItemService = require('../services/items')

const createItem = async (req, res, next) => {
    const { name, price } = req.body
    const data = await ItemService.insert({name, price})
    res.status(200).json({message:'item created', data})
}

const getItemsList = async (req, res, next) => {
    const data = await ItemService.getAllItems()
    res.status(200).json({data:data})
}

module.exports = {
    createItem,
    getItemsList
}