const mongoose = require('mongoose');

const TestimonialSchema = new mongoose.Schema({

    email:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
    comment:{
        type: String,
        required: true,
        minlength: 1,
        trim: true
    }, 
})
const Testimonial = mongoose.model('Testimonial', TestimonialSchema);

module.exports = { Testimonial }