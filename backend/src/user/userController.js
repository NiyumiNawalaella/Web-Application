var userService = require('./userService');

var getDataControllerfn = async(req, res) =>
{
    var userdetails = await userService.getDataFromDBService();
    res.send({"status": true, "data": userdetails});
}
var createUserControllerFn = async(req, res) =>
{
    var status = await userService.createUserDBService(req.body);

    if(status)
    {
        res.send({"status": true, "message": "User created sucessfully"});
    }
    else
    {
        res.send({"status": false, "message": "Error creating user"});
    } 
}

var updateUserController = async (req,res) =>
{
    console.log(req.params.id);
    console.log(req.body);

    var result = await userService.updateUserDBService(req.params.id);

    if(result)
    {
        res.send({"status": true, "message": "User Updated"});
    }
    else
    {
        res.send({"status": false, "message": "User Update has Failed"});
    }
}
module.exports = {getDataControllerfn, createUserControllerFn,updateUserController};