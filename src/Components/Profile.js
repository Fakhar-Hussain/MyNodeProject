import React from 'react'
import {useNavigate} from 'react-router-dom'


function Profile() {
    const navigate = useNavigate();
    let auth = localStorage.getItem("user");
    let data = JSON.parse(auth);
    
    const deleteAccount = async () => {
        let result = await fetch(`http://localhost:5000/delete/${data._id}`,{
            method: 'DELETE',
        })
        if (result) {
            localStorage.clear();
            navigate("/signup");
        }
    }

  return (
        <div  className='signBox' style={{marginTop: "6%",}}>
            <h2>Profile</h2>
            <div style={{backgroundColor: "#fff", height: '70px',borderRadius: '6px'}}>
                <h4 style={{paddingTop: '14px'}}>Name : {data.name}</h4>
                <h4 style={{marginTop: '-14px'}}>Email : {data.email}</h4>
            </div>

            <button className='btnBox' style={{backgroundColor: "red"}} type='button' onClick={deleteAccount} >Delete Account</button>

        </div>
  )
}

export default Profile
