var express = require('express');
var server = express();
var routes = require('./routes/routes');

var mongoose = require('mongoose');
const cors = require('cors');
// monogodb connection
// mongoose.connect("",{useNewUrlParse:true, useUnifiedTopology:true},function checkDB(error)
// {
//     if(error)
//     {
//         console.log("error")
//     }
//     else 
//     {
//         console.log("DB Connected!")
//     }
// });

server.use(express.json());
server.use(routes);
server.use(cors());

server.listen(8000, function check(error)
{
    if(error)
    {
        console.log("error");
    }
    else
    {
        console.log("started");
    }
});