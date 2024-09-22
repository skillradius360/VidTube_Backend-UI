import React,{useState,useEffect} from 'react'
import axios from "axios"
function Login() {
    let [username,setUsername]= useState("")
    let [password,setPassword]= useState("")
    let [email,setEmail]= useState("")
    let [buttonState,setButtonState] =useState(false)
    useEffect(()=>{
          axios.post('/users/login', {
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
    <div>
        <form onSubmit={(e)=>e.preventDefault()} >
            <input type="text" placeholder="username" value={username} onChange={(e)=>setUsername(e.target.value)}/>
            <input type="password" placeholder='password'value={password} onChange={(e)=>setPassword(e.target.value)}/>
            <input type="email" placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
            <button onClick={()=>setButtonState((prev)=>{return !prev})}></button>
        </form>
    </div>
  )
}

export default Login