import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const navigate = useNavigate();

    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')


    const submitLogin = async () => {
        let result = await fetch("http://localhost:5000/login", {
          method: "post",
          body: JSON.stringify({email,password}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        await result.json()
        .then((data) => {
            console.log("ResultData:",data);
            localStorage.setItem("user", JSON.stringify(data) )
            navigate('/')
          }).catch(() => {
            alert("Please fill email & password correctly!");
        })
    }


    useEffect(() => {
      let auth = localStorage.getItem("user")
      if (auth) {
        navigate('/');
      } 
    })

  return (
    <div className='signBox-center'>
      <div className='signBox' style={{marginTop: "6%"}}>
          <h2>Login</h2>

          <input className='inputBox' value={email} onChange={(text) => setEmail(text.target.value)} type='text' placeholder='Enter Email' />
          <input className='inputBox' value={password} onChange={(text) => setPassword(text.target.value)} type='password' placeholder='Enter Password' />
          
          <button className='btnBox' type='button' onClick={submitLogin}>Login</button>
      </div>
    </div>
  )
}

export default Login