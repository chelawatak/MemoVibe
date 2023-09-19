const mongoose=require('mongoose');
// const mongoURI="mongodb://127.0.0.1:27017/memovibe"
const mongoURI=process.env.mongoURI;


const connectToMongo=()=>{

    mongoose.connect(mongoURI);
    console.log("connected to mongo successfully");
}

module.exports = connectToMongo;