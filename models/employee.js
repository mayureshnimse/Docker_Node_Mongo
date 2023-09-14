const mongoose = require('mongoose')

const empSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: String,
        required: true
    },
    contact: {
        type: String,
        required: true
    }
})

module.exports = mongoose.model('Employee', empSchema)

