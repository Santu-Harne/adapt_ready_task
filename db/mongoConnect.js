const mongoose = require('mongoose')
const assert = require("assert")
const dbURL = 'DISH_MONGO_URL=mongodb+srv://santosh283143:santosh1437@cluster0.nzq3jw9.mongodb.net/AdaptReady'
const connectDB = () => {
    return mongoose.connect(process.env.DISH_MONGO_URL || dbURL, { useNewUrlParser: true }, (err) => {
        if (err) assert.deepStrictEqual(err, null)
        console.log(`mongodb connected successfully`);
    })
}

module.exports = connectDB  