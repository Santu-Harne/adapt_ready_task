const { StatusCodes } = require("http-status-codes")
const Dish = require('../model/dishModel')

const dishController = {
    getAll: async (req, res) => {
        try {
            const filterParams = req.body

            const sortString = filterParams.sort

            for (const key in sortString) {
                if (sortString[key] === true) sortString[key] = 1
                if (sortString[key] === false) sortString[key] = -1
            }

            //creating regular expression for search functionality
            let regExp = /[A-Z a-z]/i

            { filterParams.searchString && filterParams.searchString.length >= 3 ? (regExp = new RegExp(`${filterParams.searchString}`, 'i')) : null }

            const dishes = await Dish.find({ ...filterParams, name: regExp }).sort(sortString)

            res.json(dishes)
        } catch (err) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
        }
    }
}
module.exports = dishController