var express = require('express');
var router = express.Router();
const ObjectId = require('mongodb').ObjectId;

router.get('/bookings', (req, res, next) => {
  req.collection.find({})
  .toArray()
  .then(results => res.json(results))
  .catch(error => res.send(error));
});

router.post('/bookings', (req, res, next) => {
  const {username, email, phnum, facilities, startdateandtime, enddateandtime, assitancerequirement, number_of_participants,  membershipno} = req.body;
  if(!username || !email || !phnum || !facilities || !startdateandtime || !enddateandtime || !assitancerequirement || !number_of_participants)
  {
    return res.status(400).json({
      message: 'Please fill the required fields!',
    });
  }

  const payload = {username, email, phnum, facilities, startdateandtime, enddateandtime, assitancerequirement, number_of_participants,  membershipno};
  req.collection.insertOne(payload)
  .then(result => res.json(result))
  .catch(error => res.send(error));
});

router.delete('/bookings/:id', (req, res, next) => {
  const { id }   = req.params;
  const _id = ObjectId(id);

  req.collection.deleteOne({_id})
  .then(result => res.json(result))
  .catch(error => res.send(error));
});

module.exports = router;
