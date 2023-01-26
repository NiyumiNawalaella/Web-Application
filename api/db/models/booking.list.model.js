// task.model
const mongoose = require('mongoose');

const BookingListSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    _BookingId:{
        type: mongoose.Types.ObjectId,
        required: true,
    }
})
const BookingList = mongoose.model('BookingList', BookingListSchema);

module.exports = { BookingList }