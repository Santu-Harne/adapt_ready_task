const mongoose = require('mongoose')

const dishSchema = new mongoose.Schema({
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
})

module.exports = mongoose.model("Dish", dishSchema)

