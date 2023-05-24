import mongoose from 'mongoose';

const productSchema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    url:String,
    defaultUrl:String,
    title:Object,
    price:Object,
    quantity:Number,
    discription:String,
    discount:String,
    tagline:String,

});  


const Product=mongoose.model("product",productSchema);

export default Product;