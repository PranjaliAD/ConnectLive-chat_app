import mongoose from "mongoose";

const connectToMongo = async () =>{
    try{
        await mongoose.connect(process.env.mongodb_url);
        console.log("Connected to MongoDB");
    }catch(error){
        console.log("Error connecting to MongoDB" ,error.message);
    }
};

export default connectToMongo;