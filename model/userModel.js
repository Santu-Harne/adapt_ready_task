const mongoose = require('mongoose')
const assert = require('assert')

const connect2 = mongoose.createConnection(process.env.USER_MONGO_URL || 'mongodb+srv://santosh283143:santosh1437@cluster0.nzq3jw9.mongodb.net/cmsbd?retryWrites=true&w=majority&authSource=admin&ssl=true', (err) => {
    if (err) assert.deepStrictEqual(err, null)
    console.log(`user database connected successfully`);
});

const userSchema = connect2.model('Model', new mongoose.Schema({
    email: {
        type: String,
        required: true,
        trim: true
    },
    password: {
        type: String,
        required: true,
        trim: true
    }
}, {
    collection: "users",
    timestamps: true
}))

module.exports = userSchema

