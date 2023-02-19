const route = require("express").Router()
const dishController = require('../controller/dishController')

route.post('/getall', dishController.getAll)

module.exports = route