import mongoose from 'mongoose';
export const Connection=async(username,password)=>
{
    const URL=`mongodb+srv://parthtrivedi0710:Parth@123@ecommerce-web.a2d2n8s.mongodb.net/?retryWrites=true&w=majority`
    try{
        await mongoose.connect(URL,{useUnifiedTopology:true,useNewUrlParser:true});
            console.log("Database Conected Successfully");
    }
    catch(error)
    {
        console.log("Error While Connecting With The Database",error.message);
    }

}
export default Connection;