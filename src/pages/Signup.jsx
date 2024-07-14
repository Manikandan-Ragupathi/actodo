import {Link} from 'react-router-dom'
import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
function Signup(props)
{
    
    const setuser=props.setuser
    const user=props.user
    const[eusername,setEusername]=useState("")
    const[epassword,setEpassword]=useState("")
    const navigate=useNavigate()

    function handleuser(ev)
    {
        setEusername(ev.target.value)
    }
    function handlepassword(ev)
    {
        setEpassword(ev.target.value)
    }

    function adduser()
    {
        setuser([...user,{username:eusername,password:epassword}])
        navigate("/")
    }
    
    return(<div className="bg-black p-10">
            <div className="bg-[#EFEFEF] p-10 border rounded-md">
                <h1 className="text-3xl font-medium">Hey Hi</h1>
                <p>I help you manage your activity after login):</p>
                <div className="flex flex-col gap-2 my-2">
                    <input type='text' className="w-52 border-black p-1 bg-transparent border rounded-md " placeholder="Username" onChange={handleuser}></input>
                    <input type='text' className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Password" onChange={handlepassword}></input>
                    <input type='text' className="w-52 border-black p-1 bg-transparent border rounded-md" placeholder="Confirm password"></input>
                    <button className="bg-[#8272DA] w-24 p-1 rounded-md" onClick={adduser}>Sign up</button>

                    <p>Already have an account?<Link to={"/"} className='underline'>Login</Link></p>
                </div>
            </div>
    </div>)
}
export default Signup