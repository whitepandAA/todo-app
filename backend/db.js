const mong=require("mongoose");
mong.connect("mongodb+srv://johnwicksp003:bDnkun6DbjNhQ0XF@cluster0.zseu2so.mongodb.net/todo-app")
const schematodo=new mong.Schema({
    title:String,
    description:String,
    completed:Boolean
})
const todoo=mong.model("todos",schematodo);
module.exports={
    todoo,
}
    
