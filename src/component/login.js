import React, { useState } from 'react'


export default function Login(){
    const[email,setEmail]= useState("");
    const[password, setPassword]= useState("")


    


    return(
<>
<h1>login to the portal</h1>
<h3>login</h3>

<input placeholder = "Enter your email"
value={email}
onChange={(e) =>{
    setEmail(e.target.value)
}}
 />
 <br/>
<input placeholder = "Enter your password" 
value={password}
onChange={(e) =>{
    setPassword(e.target.value)
}}
/>
<br/>
<button onClick={() =>{
    
}}>Submit</button>




</>

    )
}