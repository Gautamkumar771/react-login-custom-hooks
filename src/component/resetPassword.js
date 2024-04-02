import { useState } from "react"

export default function Reset(){
    const[email, setEmail] = useState("");
    return(
        <>
        <h3>
            Password reset
        </h3>
        <input placeholder="Enter your email"
        value={email}
        onChange={(e) =>{
            setEmail(e.target.value)
        }}
        />
        <br />
      <button
        onClick={() => {
          // Logic to send a new password follows
        }}
      >
        Submit
      </button>      
      <br />
        
        </>
    )
}