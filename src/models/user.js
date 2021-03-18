//const { MongoClient } = require("mongodb");
const { Schema, model } = require('mongoose');

const userSchema = new Schema(
    {
        name: { type: String, trim: true },
        lastname :  { type: String, trim: true },
        username: {type: String,required: true,unique: true, trim: true},
        email: { type: String, required: true, unique: true, trim: true },
        password: { type: String, required: true },
        date: { type: Date, default: Date.now },
    }, {
    timestamps: true,
    versionKey: false
});

module.exports = model('User', userSchema);