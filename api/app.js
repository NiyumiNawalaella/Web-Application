const express = require('express');
const app = express();

const {mongoose} = require('./db/mongoose');

const bodyParser = require('body-parser');

//Load in the mongoose models
const { Booking, BookingList } = require('./db/models');

// Load middleware
app.use(bodyParser.json());

//CORS HEADERS MIDDLEWARE
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


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
    Booking.findOneAndUpdate({ _id: req.params.id}, {
        $set: req.body
    }).then(() => {
        res.sendStatus(200);
    });
});

// PATH /Bookings/:id
// Purpose: Update a specified booking

app.delete('/bookings/:id',(req, res) => {
    //to delete the specified booking (document with id in the URL) from the admin account page.
    Booking.findOneAndRemove({
        _id: req.params.id
    }).then((removedBookingDoc) =>{
        res.send(removedBookingDoc);
    })
});

app.get('/bookings/:bookingId/bookinglists', (req,res) => {
//getting all the bookings list to account of admin to view.
BookingList.find({
    _BookingId: req.params.bookingId
}).then((bookinglists) => {
    res.send(bookinglists);
})
});

app.get('/bookings/:bookingId/bookinglists/:bookinglistId', (req, res) => {
    //specified to get one document by ID.
    BookingList.findOne({
        _id: req.params.bookinglistId,
        _BookingId: req.params.bookingId
    }).then((bookinglist) => {
        res.send(bookinglist);
    })
})

app.post('/bookings/:bookingId/bookinglists', (req, res) => {
    //posting all the bookings list to account of admin to view.
    let newBookingList = new BookingList({
        title: req.body.title,
        _BookingId: req.params.bookingId
    });
    newBookingList.save().then((newBookingListDoc) => {
        res.send(newBookingListDoc);
    })
});

app.patch('/bookings/:bookingId/bookinglists/:bookinglistId', (req,res) => {
    // updating an existing booking from the booking list in the account of the admin
    BookingList.findOneAndUpdate({
        _id: req.params.bookinglistId,
        _BookingId: req.params.bookingId
    }, {
        $set: req.body
    }
    ).then(() => {
        res.sendStatus(200);
    })
});

app.delete('/bookings/:bookingId/bookinglists/:bookinglistId', (req,res) => {
    // deleting an existing booking from the booking list in the account of the admin
    BookingList.findOneAndRemove({
        _id: req.params.bookinglistId,
        _BookingId: req.params.bookingId
    }).then((removedBookingListDoc) => {
        res.send(removedBookingListDoc);
    })
});

app.listen(3000,() => {
    console.log("Server is listening on port 3000");
})