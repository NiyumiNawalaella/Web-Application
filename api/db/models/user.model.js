const mongoose = require('mongoose');
const _ = require('lodash');
const jwt = require('jsonwebtoken');

//JWT Vault
const jwtSecret = "ifiej0r984938039ergughe8eruw9r0ueeghhgrr9e88e0e0fhe9gerf09erwf";

const UserSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 1,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8,
    },
    sessions: [{
        token: {
            type: String,
            required: true
        },
        expiresAt: {
            type: Number,
            required: true
        }
    }]
});

// Instance methods
UserSchema.methods.toJSON = function() {
    const user = this;
    const userObject = user.toObject();

    //return the document except the password and sessions(these shouldn't be made public)
    return _.omit(userObject, ['password', 'sessions']);
}

UserSchema.methods.generateAccessAuthToken = function() {
    const user = this;
    return new Promise((resolve, reject) => {

        //Create the JSON Web Token and return that
        jwt.sign({_id: user._id.toHexString() }, jwtSecret, { expiresIn: "15m"}, (err, token) =>{
            
        })
    })
}