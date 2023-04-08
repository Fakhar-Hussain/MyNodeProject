import React, {useEffect, useState} from 'react'
import {useNavigate} from 'react-router-dom'

const Signup = () => {
    const [name , setName] = useState('')
    const [email , setEmail] = useState('')
    const [password , setPassword] = useState('')

    const navigate = useNavigate();

    useEffect(() => {
      let auth = localStorage.getItem("user")
      if (auth) {
        navigate('/');
      } 
    })


    const submit = async () => {
        console.log(name,email,password)
        let result = await fetch("http://localhost:5000/register", {
          method: "post",
          body: JSON.stringify({name,email,password}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();
        if (result) {
          console.log(result);
          localStorage.setItem("user", JSON.stringify(result) )
          navigate('/')
        }
    }

  return (
    <div className='signBox' style={{marginTop: "4%"}}>
        <h2>Register</h2>

        <input className='inputBox' value={name} onChange={(text) => setName(text.target.value)} type='text' placeholder='Enter Name' />
        <input className='inputBox' value={email} onChange={(text) => setEmail(text.target.value)} type='text' placeholder='Enter Email' />
        <input className='inputBox' value={password} onChange={(text) => setPassword(text.target.value)} type='password' placeholder='Enter Password' />
        
        <button className='btnBox' type='button' onClick={submit}>SignUp</button>
    </div>
  )
}

export default Signup