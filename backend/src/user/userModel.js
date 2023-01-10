var mongoose = require('mongoose');
var schema = mongoose.schema;

var userSchema = new student(
    {
        first_name: 
        {
            type: String,
            required : true
        },
        address: 
        {
            type: String,
            required : true
        }
    });

//var userModel = mongoose.model('user',userSchema)
//module.exports = mongoose.model('userdetails', userSchema);