export function Createtodo(){
return  <div>
    <input id ="title" type="text" placeholder="title"></input><br></br>
    <input id="description" type="text" placeholder="description"></input><br>
    </br>

    <button onClick={()=>{
        fetch("http://localhost:3000/todo",{
            method:"POST",
            body:JSON.stringify({
                title:document.getElementById('title').value,
                description:document.getElementById('description').value
            }),headers:{
                "Content-type":"application/json"
            }
        }).then(async function (res){
            const js=res.json();
            alert("todo added")
        })
    }
        
}>ADD TODO</button>
    </div>
    

}


