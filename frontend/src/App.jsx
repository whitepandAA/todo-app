import { useState } from "react"
import { Createtodo } from "./components/Createtodo"
import { Todos1 } from "./components/Todos1"


function App() {
  const[Todos,setTodos]=useState([]);
 fetch("http://localhost:3000/todos")
 .then(async function(res){
   const json=await res.json();
   setTodos(json.alltodo);
 })
  return (
    <div>
    <Createtodo/>
    <Todos1 Todos={Todos}/>
    </div>
  )
}
 
export default App
