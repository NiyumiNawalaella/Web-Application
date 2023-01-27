//this file will handle connection logic to the MongoDB database

const mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose.connect('mongodb://127.0.0.1:27017/Sportsclubapp', {useNewUrlParser: true}).then(() => {
    console.log("Connected to MongoDb sucessfully!");

}).catch((e) => {
    console.log("Error while attempting to connect to MongoDB");
    console.log(e);
});
// to prevent deprectation warnings (from MongoDb native driver)
// mongoose.set('useCreateIndex', true);
// mongoose.set('useFindAndModify', false);
// mongoose.set('useNewUrlParser', true);
// mongoose.set('useUnifiedTopology', true);


module.exports = {
    mongoose
};