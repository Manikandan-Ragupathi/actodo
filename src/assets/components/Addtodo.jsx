import {useState} from "react"
function Addtodo(props)
{
    const ActivityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    const [additem,setitem]=useState("")
    function handleChange(ev)
    {
        setitem(ev.target.value)
    }
    function adding()
    {
        setactivityArr([...ActivityArr,{id:ActivityArr.length+1,activity:additem}])
        setitem("")
    }
    

    return(
        <div className="flex flex-col gap-3">
                    <h1 className="text-2xl font-medium">Manage Activity</h1>
                    <div>
                        <input value={additem} onChange={handleChange} type="text" className="border border-black bg-transparent p-1" placeholder="Next Activity?"></input>
                        <button onClick={adding} className="bg-black text-white p-1 border border-black">Add</button>
                    </div>
                </div>
    )
}
export default Addtodo