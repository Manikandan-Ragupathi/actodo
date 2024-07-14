import Addtodo from "./Addtodo.jsx"
import Todolist from "./Todolist.jsx"
import { useState } from "react"
function TodoContainer()
{
    const [activityArr,setactivityArr]=useState([
        {
            id:1,
            activity:"Go for walk"
        },
        {
            id:2,
            activity:"get refresh"
        }
        ,
        {
            id:3,
            activity:"eat breakfast"
        }
    ])
    return (
        <div>
            <div className="flex gap-5 flex-wrap">
                <Addtodo activityArr={activityArr} setactivityArr={setactivityArr}/>
                <Todolist activityArr={activityArr} setactivityArr={setactivityArr}/>
            </div>
        </div>
    )
}
export default TodoContainer