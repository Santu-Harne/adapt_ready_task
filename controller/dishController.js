const { StatusCodes } = require("http-status-codes")
const Dish = require('../model/dishModel')

const dishController = {
    getAll: async (req, res) => {
        try {
            const filterParams = req.body
            const queryString = {}
            if (filterParams.state.length) {
                queryString.state = filterParams.state
            }
            if (filterParams.flavor_profile.length) {
                queryString.flavor_profile = filterParams.flavor_profile
            }
            if (filterParams.diet.length) {
                queryString.diet = filterParams.diet
            }
            const dishes = await Dish.find(req.query, { ...queryString })

            res.json(dishes)
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
}
module.exports = dishController