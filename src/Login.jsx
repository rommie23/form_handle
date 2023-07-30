import React, { useState } from 'react'

export default function Login() {
    const [user,setUser]=useState("");
    const [password,setPassword]=useState("");
    const [passError,setpassError]=useState(false);
    const [userError,setuserError]=useState(false);


    function loginHandle(e){
        if(user.length<5 || password.length<5){
            alert("Insert valid vlaues")
            console.log(user,password)
        }
        else{
            alert("Details saved successfully")} 
        e.preventDefault()
    }
    function userHandler(e){
        let item = e.target.value
        if(item.length<5){
            setuserError(true)
        }
        else{
            setuserError(false)
        }
        setUser(item)
    }

    function passwordHandler(e){
        let item = e.target.value
        if(item.length<5){
            setpassError(true)
        }
        else{
            setpassError(false)
        }
        setPassword(item)
    }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={loginHandle}>
      <input type="text"  placeholder='enter username' onChange={userHandler}/><br />
      {userError?<small>Please give more than 5 characters</small>:null}
      <br /><br />
      <input type="password"  placeholder='enter password' onChange={passwordHandler}/><br />
      {passError?<small>invalid password</small>:null}
      <br /><br />
      <button type='submit'>Login</button>
      </form>
    </div>
  )
}
