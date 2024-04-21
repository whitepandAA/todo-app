
 const express=require("express");
const { createtodos, updatetodos } = require("./types");
const {todoo}=require("./db");

const cors=require("cors")
 const app=express();
 app.use(express.json());
 app.use(cors({
    origin:"http://localhost:5173"
 }));
app.post("/todo",async function(req,res){
    const createpayload=req.body;
    const parsedpayload=createtodos.safeParse(createpayload);
    if(!parsedpayload.success){
        return res.json({
            msg:"invalid input"
        })
    }
await todoo.create({
    title:createpayload.title,
    description:createpayload.description,
    completed:false
}) 
res.json({msg:"todo created "})
})
    //put it in db
app.put("/completed",async function(req,res){
const cid =req.body;
const pid=updatetodos.safeParse(cid);
if(!pid.success){
    return res.json({
        msg:"invalid user id input"
    })
}
//proceed with db
await todoo.updateOne({
    _id:req.body.id
},{
    completed:true
})
res.json({
    msg:"done!!"
})
})
app.get("/todos",async function(req,res){
 const alltodo=await todoo.find({

})
return res.json({
    alltodo
})
})
 app.listen(3000)
 //create user-post
 //login user -get
 //create todo -post