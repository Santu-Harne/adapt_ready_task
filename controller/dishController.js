const { StatusCodes } = require("http-status-codes")
const bcrypt = require("bcryptjs")

const Dish = require('../model/dishModel')
const User = require('../model/userModel')

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

            return res.status(StatusCodes.OK).json({ msg: 'All Dish data', data: dishes })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    },
    login: async (req, res) => {
        try {
            const { email, password } = req.body

            //checking user exists or not
            const extUser = await User.findOne({ email })
            if (!extUser)
                return res.status(StatusCodes.NOT_FOUND).json({ msg: "User doesn't exists.." })

            // comparing password
            const isMatch = await bcrypt.compare(password, extUser.password)
            if (!isMatch)
                return res.status(StatusCodes.BAD_REQUEST).json({ msg: "Password didn't match" })


            return res.status(StatusCodes.OK).json({ msg: 'User Logged in successfully', data: extUser })
        } catch (error) {
            return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: error.message })
        }
    }
}
module.exports = dishController