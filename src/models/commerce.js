const mongoose = require("mongoose");

const commerceSchema = new mongoose.Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    name: {
        type: String,
        required: true,
        trim: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: [String], // Array of strings for color options
        required: true
    },
    image: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
        trim: true
    },
    category: {
        type: String,
        required: true,
        trim: true
    },
    featured: {
        type: Boolean,
        default: false // Default to false if not specified
    }
});

const CommerceProduct = mongoose.model("CommerceProduct", commerceSchema);

module.exports = CommerceProduct;
