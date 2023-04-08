import React, {useEffect, useState} from 'react'
import {useParams, useNavigate} from 'react-router-dom'

const UpdateProduct = () => {
    const [name , setName] = useState('')
    const [brand , setBrand] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')
    
    const params = useParams();
    const navigate = useNavigate();

    const UserData = async () => {
      let result = await fetch(`http://localhost:5000/product/${params.id}`)
      let data = await result.json()
      setName(data.name);
      setBrand(data.brand);
      setPrice(data.price);
      setCategory(data.category);
    }

    const Update = async () => {
      await fetch(`http://localhost:5000/product/${params.id}`, {
        method: "post",
        body: JSON.stringify({name,brand,price,category}),
        headers: {
          'Content-Type': 'application/json'
        }
      })
      .then(() => {
        if (name !== '' && brand !== '' && price !== '' && category !== '') {
          navigate("/");
          alert("Updated Successfuly"); 
        }else{
          alert("Please fill all fields!"); 
        }
      })
    } 

    useEffect(() => {
      UserData();
    },[]);

  return (
    <div className='signBox-center'>
      <div className='signBox' style={{marginTop: "6%"}}>
          <h2>Update-Product</h2>

          <input className='productBox' value={name} onChange={(text) => setName(text.target.value)} type='text' placeholder='Enter Name' />
          <input className='productBox' value={brand} onChange={(text) => setBrand(text.target.value)} type='text' placeholder='Enter Brand-Name' />
          <input className='productBox' value={price} onChange={(text) => setPrice(text.target.value)} type='text' placeholder='Enter Price' />
          <input className='productBox' value={category} onChange={(text) => setCategory(text.target.value)} type='text' placeholder='Enter Category' />
          
          <button onClick={Update} className='btnBox' type='button' >Update-Product</button>
      </div>
    </div>
  )
}

export default UpdateProduct