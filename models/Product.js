const mongoose = require('mongoose');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Please add a name'],
        unique: true,
        trim: true,
        maxlength: [50, 'Name cannot be more than 50 characters']
    },
    slug: String,
    description: {
        type: String,
        required: [true, 'Please add a description'],
        maxlength: [500, 'Description cannot be more than 500 characters']
    },
    size: {
        type: String
    },
    color: {
        type: String
    },
    category: {
        type: String,
        required: [true, 'Please add a category'],
        maxlength: [20, 'Category cannot be more than 20 characters']
    },
    price: {
        type: Number,
        required: [true, 'Please add a price'],
        maxlength: [5, 'Price cannot be more than 5 characters']
    },
    image: {
        type: String,
        default: 'no-photo.jpg'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
}, { timestamps: true });

ProductSchema.index({ slug: 1 });
module.exports = mongoose.model("Product", ProductSchema);