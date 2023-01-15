const { ObjectID } = require('bson');
var express = require('express');
var router = express.Router();
const objectId = require('mongodb').objectId;

router.get('/booking_details',(req,res,next) => {
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

router.post('//booking_details',(req,res,next) =>{
  const {name, email, phone_number, facilities, date , number_of_hours, start_time, end_time, no_of_participants, trainner, membership_no} = req.body;
  if(!name || !email || !phone_number || !facilities || !date || !number_of_hours || !start_time || !end_time || !no_of_participants || !trainner)
  {
    return res.status(400).json({
      message: 'Please Enter the required information',
    });
  }
  const payload = {name, email, phone_number, facilities, date , number_of_hours, start_time, end_time, no_of_participants, trainner, membership_no};
  req.collection.insertOne(payload)
  .then(results => res.json(results.ops[0]))
  .catch(error => res.send(error));
});

router.delete('/booking_details/:id',(req,res,next) => {
  const { id } = req.params;
  const_id = ObjectID(id);

  req.collection.deleteOne({_id})
  .then(result => res.json(result))
  .catch(error => res.send(error));
});

module.exports = router;
