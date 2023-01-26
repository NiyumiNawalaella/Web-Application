const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

//Load in the mongoose models
const { Booking, BookingList } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

// ROUTE HANDLERS

// BOOKING ROUTES

// GET /Bookings
// Purpose: Get all bookings 

// ******************************* lists = bookings 
app.get('/bookings',(req, res) => {
    //To return an array of all the lists in the database
    Booking.find({}).then((Bookings) => {
        res.send(Bookings);
    }).catch((e) =>  {
        res.send(e);
    });
})

// POST /Bookings
// Purpose: Create a booking

app.post('/bookings',(req, res) => {
    //To create a new booking and reurn the new booking documnet back to the user(which includes the id)
    //and also all the bookings should be shown in admin account.
    //the booking information (fields) will be passed in via the JSON request body.
    let title = req.body.title;
    let newBooking = new Booking({
        title
    });
    newBooking.save().then((bookingDoc) => {
        //the full list document is returned with the id.
        res.send(bookingDoc);
    })
});

// PATH /Bookings/:id
// Purpose: Update a specified booking

app.patch('/bookings/:id',(req, res) => {
    //To update the specified bookings (booking document with id in the URL) with the new values specified in the JSON body of the request in admin account page.
});

// PATH /Bookings/:id
// Purpose: Update a specified booking

app.delete('/bookings/:id',(req, res) => {
    //to delete the specified booking (document with id in the URL) from the admin account page.
});

app.listen(3000,() => {
    console.log("Server is listening on port 3000");
})