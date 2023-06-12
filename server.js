require('dotenv').config()

const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const path = require("path")
const { StatusCodes } = require("http-status-codes")

// port
const PORT = process.env.PORT || 4000

// ref
const app = express()

// body parser
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// middleware
app.use(cors())
app.use(cookieParser())

// route modules
const dishRoute = require('./route/dishRoute')

// primary route 
app.use('/dish', dishRoute)

const start = async () => {
    try {
        app.listen(PORT, () => {
            console.log(`server is listening @ http://localhost:${PORT}`);
        })
    } catch (err) {
        return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({ msg: err.message })
    }
}

start()