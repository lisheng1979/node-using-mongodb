import mongoose from "mongoose";

const Schema = mongoose.Schema;

export const ProductSchema = new Schema({
    name: {
        type: String,
        require: 'Enter a product name'
    },
    description: {
        type: String,
        require: 'Enter a description'
    },
    category: {
        type: String        
    },
    price: {
        type: Number
    },
    created_date: {
        type: Date,
        default: Date.now
    }
})