const mongoose=require('mongoose');
const express= require('express');
const bodyparser = require('body-parser');
const shortid = require('shortid')
const app=express();

app.use(bodyparser.json())
const connection = mongoose.connect("mongodb://localhost/Redux",
    {useNewUrlParser:true,
        useUnifiedTopology: true,
    useCreateIndex:true }, (err)=>{
        if(!err){
            console.log("connection successful")
        }
        else{
            console.log(err);
        }
    }
)

var Productmodel= mongoose.model("Redux.React_cart",new mongoose.Schema({
    _id:{type: String, default:shortid.generate},
    image:String,
    title:String,
    description:String,
    availableSizes:[String],
    price:Number

}));

app.get("/api/products", async (req,resp)=>{

    const Product =  await Productmodel.find({})
    resp.send(Product);


})

app.post("/api/products", async(req,resp)=>{

    const newproducts = new Productmodel(req.body);
    const status = await newproducts.save();
    resp.send(status)

})

app.delete("/api/products:id",async (req, resp)=>{
    const deleted = await new Productmodel.findByIdAndDelete(req.params.id);
    resp.send(deleted)
})

var port = process.env.port || 5000;

app.listen(port);