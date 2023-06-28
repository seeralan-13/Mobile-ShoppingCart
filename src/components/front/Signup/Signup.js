import React, { useRef } from "react";
import "../Signup/Signup.css";

const Signup = () => {
    const name=useRef()
    const email=useRef()
    const password=useRef()

    const handleClick=()=>{
        console.log(name,email,password)
    }

    return(
        <div>
        <div className="container">
            <div className="Input-space">
                <input placeholder="Name" type="text" ref={name} />
            </div>
            <div className="Input-space">
                <input placeholder="Email" type="text" ref={email} />
            </div>
            <div className="Input-space">
                <input placeholder="Password" type="password" ref={password} />
            </div>
            <button onClick={handleClick}>Sign Up</button>

        </div>
        </div>
    )
}

export default Signup;