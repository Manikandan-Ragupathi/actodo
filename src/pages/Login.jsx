import {Link} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import {useState} from 'react'
function Login(props)
{
    const navigate=useNavigate()
    const user=props.user
    const[eusername,setEusername]=useState("")
    const[epassword,setEpassword]=useState("")
    const [ruser,setruser]=useState(true)
    
    
    
    function handleUInput(ev){
        setEusername(ev.target.value)
    }
    function handlePInput(ev){
        setEpassword(ev.target.value)
    }
    function checkuser()
    {
        var userfound=false;
        user.forEach(function(item){
           
            if(item.username===eusername && item.password===epassword)
            {
                console.log("login successfull")
                userfound=true;
                navigate("/landing",{state:{user:eusername}})
            }
        })
        if(userfound===false)
        {
            console.log("loginfailed")
            setruser(false)
        }
    }
    return(<div className="bg-black p-10">
        <div className="bg-[#EFEFEF] p-10 border rounded-md">
            <h1 className="text-3xl font-medium">Hey Hi</h1>
            {ruser?<p>I help you manage your activity after login):</p>:<p className='color-red'>Please sign up Before you login</p>}
            <div className="flex flex-col gap-2 my-2">
                <input type='text' className="w-52 border-black p-1 bg-transparent border rounded-md " onChange={handleUInput} placeholder="Username"></input>
                <input type='text' className="w-52 border-black p-1 bg-transparent border rounded-md" onChange={handlePInput}  placeholder="Password"></input>
            
                <button className="bg-[#FCA201] w-24 p-1 rounded-md" onClick={checkuser}>Login</button>

                <p>Already have an account?<Link to={"/signup"} className='underline'>signup</Link></p>
            </div>
        </div>
</div>)
}
export default Login