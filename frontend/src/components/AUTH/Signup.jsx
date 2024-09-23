import React,{useState,useEffect} from 'react'
import axios from "axios"
function Signup() {
    let [username,setUsername]= useState("")
    let [password,setPassword]= useState("")
    let [email,setEmail]= useState("")
    let [fullName,setFullName]= useState("")
    let [buttonState,setButtonState] =useState(false)

    if(!(username || password || email )){
      console.error("error")
      
    }

    useEffect(()=>{
          axios.post('users/signUp', {
        username: username,
        password: password,
        email: email
    },
    { withCredentials: true})
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },[buttonState])


  return (
    <div className=" flex w-[100vw] h-[87vh] justify-center items-center bg-gradient-to-tr from-violet-400 via-white to-violet-400  ">


    <div className='h-[50%] max-w-[20rem]  flex rounded  shadow-inner  grow justify-center items-center bg-purple-300'>
        <form onSubmit={(e)=>e.preventDefault()} 

        className='h-100%] w-[100%] flex justify-center items-center flex-col  gap-7'>
          <input type="text"  required placeholder='FullName' value={fullName} onChange={(e)=>setFullName(e.target.value)}
          className='w-[70%] h-10 border-2 rounded-md border-transparent outline-none'/>
       
            <input type="text" required placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}
            className='w-[70%] h-10 rounded-md border-transparent outline-none'/>

        
            <input type="password"  required placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}
            className='w-[70%] h-10 border-2 rounded-md border-transparent outline-none'/>

          
            <input type="email"  required placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}
            className='w-[70%] h-10 border-2 rounded-md border-transparent outline-none'/>


            <button onClick={()=>setButtonState((prev)=>{return !prev})}>SUBMIT</button>

        </form>
    </div>
    </div>
  )
}

export default Signup