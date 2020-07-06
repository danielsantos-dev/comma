const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DataSchema = new Schema({
    _id : {
        type: Number
    },
    bodyDB: {
        type: Object
    },
}, {_id: false})

module.exports = Data = mongoose.model('Data', DataSchema);