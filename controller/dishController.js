const { StatusCodes } = require("http-status-codes")
const Dish = require('../model/dishModel')

const dishController = {
    getAll: async (req, res) => {
        try {

            const sortValue = req.body.sort

            const dishes = await Dish.find(req.query).sort(sortValue)

            res.json(dishes)
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
}
module.exports = dishController