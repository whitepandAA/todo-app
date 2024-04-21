/* eslint-disable react/jsx-key */
/* eslint-disable react/prop-types */
export function Todos1({ Todos }){
    return <div>
        {Todos.map(function(tsk){
            return <div>
            <h1>{tsk.title}</h1>
            <h2>{tsk.description}</h2>
            <button >{tsk.completed==true?"COMPLETED":"MARK AS COMPLETED"}</button>
            </div>
        })}
        </div>
    
}