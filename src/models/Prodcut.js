const { Schema, model } = require('mongoose');

const productSchema = new Schema(
    {
        name: String,
        description: { type: String, required: true},
        supplier: { type: String },
        date: Date
    }, {
        timestamps: true
    });

module.exports = model('Prodcut', productSchema);