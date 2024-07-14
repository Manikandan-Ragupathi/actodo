

import Todoitem from "./Todoitem.jsx"
function Todolist(props)
{

    const activityArr=props.activityArr
    const setactivityArr=props.setactivityArr
    return(<div className="bg-[#BDB4EA] border rounded-md p-2 flex-grow ">
        <h1 className="text-2xl">Today Activity</h1>
        { activityArr.length===0? <p>Nothing added yet</p>:" "}
        {
            activityArr.map(function(item,index)
            {
                return <Todoitem id={item.id} index={index+1} activity={item.activity} activityArr={activityArr} setactivityArr={setactivityArr}/>
            })
        }
       
    </div>)
}

export default Todolist