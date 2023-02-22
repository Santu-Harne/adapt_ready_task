const mongoose = require('mongoose')
const connect1 = mongoose.createConnection(process.env.DISH_MONGO_URL || 'mongodb+srv://santosh283143:santosh1437@cluster0.nzq3jw9.mongodb.net/AdaptReady', (err) => {
    if (err) assert.deepStrictEqual(err, null)
    console.log(`dish database connected successfully`);
});

const dishSchema = connect1.model('Model', new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    ingredients: {
        type: String,
        required: true,
        trim: true
    },
    diet: {
        type: String,
        required: true,
        trim: true
    },
    prep_time: {
        type: String,
        required: true,
        trim: true
    },
    cook_time: {
        type: String,
        required: true,
        trim: true
    },
    flavor_profile: {
        type: String,
        required: true,
        trim: true
    },
    course: {
        type: String,
        required: true,
        trim: true
    },
    state: {
        type: String,
        required: true,
        trim: true
    },
    region: {
        type: String,
        required: true,
        trim: true
    },
}, {
    collection: "dishes",
    timestamps: true
}))

module.exports = dishSchema

