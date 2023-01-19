// import express from 'express';
// import cors from 'cors';
// import bodyParser from 'body-parser';
// import mongoose from 'mongoose';

// import issue from './Models/issue';
// import issue from './Models/issue';

// const app = express();
// const router = express.Route();

// app.use(cors());
// app.use(bodyParser.json());

// mongoose.connect('mongodb://locallost:27017/issue');

// const connection = mongoose.connection;
// connection.once('open', () => {
//   console.log('MongoDB database connection established successfully!');
// })
// router.route('/issue').get((req, res) => {
//   issue.find((err, issue) => {
//     if (err)
//     {
//       console.log(err);
//     }
//     else
//     {
//       res.json(issue);
//     }
//   });
// });
// router.route('/issue/:id').get((req, res) => {
//   issue.findById(req.params.id, (err,issue) => {
//     if (err)
//     {
//       console.log(err);
//     }
//     else
//     {
//       res.json(issue);
//     }
//   });
// });
// router.route('/issue/add').post((req, res) => {
//   let issue = new issue(req.body);
//   issue.save()
//   .then(issue => {
//     res.status(200).json({'issue': 'Added successfully'});
//   })
//   .catch(err => {
//     res.status(400).send('Failed tp create new record');
//   });
// });
// router.route('/issue/update/:id').post((req, res) => {
//   issue.findById(req.params.id, (err, issue) => {
//     if(!issue)
//     {
//       return next (new Error(' Could not load document'));
//     }
//     else
//     {
//       issue.title = req.body.title;
//       issue.responsible = req.body.responsible;
//       issue.description = req.body.description;
//       issue.severity = req.body.severity;
//       issue.status = req.body.status;

//       issue.save().then(issue => {
//         res.json('Update done');
//       })
//       .catch(err => {
//         res.status(400).send('Update failed');
//       });
//     }
//   });
// });

// router.route('/issue/delete/:id').get((req, res) => {
//   issue.findByIdAndRemove({_id: req.params.id}, (err, issue) => {
//     if(err)
//     {
//       res.json(err);
//     }
//     else
//     {
//       res.json('Remove Successfully');
//     }
//   });
// });
// app.use('/', router);
// app.listen(4000,() => console.log('Express server running on port 4000'));


// var express = require('express');
// var path = require("path");
// var bodyParser = require('body-parser');
// var mongo = require("mongoose");

// var db = mongo.connect("mongodb://localhost:27017/AngularCRUD", function(err,response){
//   if(err){ console.log( err); }
//   else{ console.log('Connected to ' + db, ' + ', response); }
// });

// var app = express()
// app.use(bodyParser());
// app.use(bodyParser.json({limit: '5mb'}));
// app.use(bodyParser.urlencoded({extended:true}));

// app.use(function (req, res, next){
//   res.setHeader('Access-Control-Allow-Orign', 'http://localhost:4200');
//   res.setHeader('Access-Control-Allow-Methods', 'GET,POST, OPTIONS, PUT, PATCH, DELETE');
//   res.setHeader('Access-Control-Allow-Headers','X-Requested-With, content-type');
//   res.setHeader('Access-Control-Allow-Credentials',true);
//   next();
// });

// var Schema = mongo.Schema;

// var UsersSchema = new Schema({
//   name: { type: String },
//   address: { type: String }, },
//   { versionKey:false });

//   var model = mongo.model('users', UsersSchema, 'users');

//   app.post("/api/SaveUser", function(req, res){
//     var mod = new model(req.body);
//     if(req.body.mode == "Save")
//     {
//       mod.save(function(err,data)
//       {
//         if(err)
//         {
//           res.send(err);
//         }
//         else
//         {
//           res.send({data:"Record has been Inserted..!!"});
//         }
//       });
//     }
//     else
//     {
//       model.findByIdAndUpdate(req.body.id, {name: req.body.name, address: req.body.address},
//         function(err,data)
//         {
//           if(err)
//           {
//             res.send(err);
//           }
//           else
//           {
//             res.send({data:"Record has been Updated..!!"});
//           }
//         });
//     }
//   })
//   app.post("/api/deleteUser",function(req,res){
//     model.remove({_id: req.body.id}, function(err){
//       if(err)
//       {
//         res.send(err);
//       }
//       else
//       {
//         res.send({data:"Record has been Deleted..!!"});
//       }
//     });
//   })


//   app.listen(4200, function(){
//     console.log('Example app Listening on port 4200')
//   })
