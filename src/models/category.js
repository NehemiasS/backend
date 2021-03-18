const { Schema, model } = require('mongoose');

const categorySchema = new Schema(
    {
        name: String,
        description: { type: String, required: true},
        cost: { type: String },
        salePrice: { type: String },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('category', categorySchema);