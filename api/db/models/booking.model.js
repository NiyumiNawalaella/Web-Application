// list.model
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }
})
const Booking = mongoose.model('Booking', BookingSchema);

module.exports = { Booking }