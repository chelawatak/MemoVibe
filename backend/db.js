const mongoose=require('mongoose');
// const mongoURI="mongodb://127.0.0.1:27017/memovibe"
const MONGODB_URL='mongodb+srv://chelawatak:NHmD7xlzaEfaqzdH@cluster0.2duuuph.mongodb.net/memovibe';
require("dotenv").config();


const connectToMongo=()=>{

    mongoose.connect(MONGODB_URL,{
        useNewUrlParser: true,
        useUnifiedTopology:true,
    })

    .then(() => console.log("DB Connected Successfully"))
    .catch( (error) => {
        console.log("DB Connection Failed");
        console.error(error);
        process.exit(1);
    } )
    // console.log(mongoURI);
    // console.log("connected to mongo successfully");
}



module.exports = connectToMongo;