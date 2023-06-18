import mongoose from "mongoose";
import dotenv from "dotenv";


dotenv.config();


async function connection(){
   let message={
    status:false,
    message:"database connection failed",
    error:null
   }
   try{
    return await mongoose.connect(process.env.DB_HOST,{
        useNewUrlParser:true,
    }).then(()=>{
        return message={
            status:true,
            message: "database connected successful"
        }
    }).catch((error)=>{
        return message={
            status:false,
            message:'database not connected'
        }
    });
   }catch(error){
    console.log(error);
   }
}

export default connection;