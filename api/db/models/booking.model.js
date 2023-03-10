// list.model
const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    _userId: {
        type: mongoose.Types.ObjectId,
        required: true,
    },
    // _bookingId:{
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    // },
    uname: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    uemail:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    uphonumber: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    facilities: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    startdateandtime: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    enddateandtime: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    no_of_participants: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    trainner: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    membershipno: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    }
})
const BookingsSchema = new mongoose.Schema({
    // _userId: {
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    // },
    // _bookingId:{
    //     type: mongoose.Types.ObjectId,
    //     required: true,
    // },
    uname: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    },
    uemail:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    uphonumber: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    facilities: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    startdateandtime: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    enddateandtime: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    no_of_participants: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    trainner: {
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    membershipno: {
        type: String,
        required: false,
        minlength: 1,
        trim: true
    }
})
const Booking = mongoose.model('Booking', BookingSchema);

const Bookings = mongoose.model('Bookings', BookingsSchema);

module.exports = { Booking, Bookings }