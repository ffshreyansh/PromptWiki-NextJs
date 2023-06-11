import mongoose from "mongoose";

let isConnected = false;

const connectToDB = async()=>{
    mongoose.set('strictQuery', true);


if(isConnected){
    console.log("MongoDB is already connected");
   }
try {
    await mongoose.connect(process.env.MONGO_URI, {
        dbName: "shared_prompts",
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    isConnected = true;
    console.log("MongoDB is connected");
} catch (error) {
    console.log(error); 
}

}

 module.exports = connectToDB;