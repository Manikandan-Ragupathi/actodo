function Todoitem(props)
{
    const ActivityArr=props.activityArr
    const setactivityArr=props.setactivityArr

    function handledelete(removeid)
    {
        var temparr=ActivityArr.filter(function(item)
        {
            if(removeid===item.id)
            {
                return false;
            }
            else{
                return true;
            }
        })

        setactivityArr(temparr)
    }

   
    return(<div className="flex justify-between">
        <p>{props.index}.{props.activity}</p> 
        <button onClick={()=>{handledelete(props.id)}} className="text-red-500">delete</button>
    </div> ) 
}
export default Todoitem