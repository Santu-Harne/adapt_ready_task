const { StatusCodes } = require("http-status-codes")
const Dish = require('../model/dishModel')

const dishController = {
    getAll: async (req, res) => {
        try {

            const sortString = req.body.sort
            for (const key in sortString) {
                if (sortString[key] === true) sortString[key] = 1
                if (sortString[key] === false) sortString[key] = -1
            }

            const dishes = await Dish.find(req.query).sort(sortString)

            res.json(dishes)
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
}
module.exports = dishController