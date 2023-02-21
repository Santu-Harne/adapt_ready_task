const route = require("express").Router()
const dishController = require('../controller/dishController')

route.post('/getall', dishController.getAll)
route.post('/login', dishController.login)

module.exports = route