import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'


const AddProduct = () => {
    const [name , setName] = useState('')
    const [brand , setBrand] = useState('')
    const [price , setPrice] = useState('')
    const [category , setCategory] = useState('')

    const navigate = useNavigate();


    const submit = async () => {
        
      if (name !== "" && brand !== "" && price !== "" && category !== "") {
        let result = await fetch("http://localhost:5000/add-product", {
          method: "post",
          body: JSON.stringify({name,brand,price,category}),
          headers: {
            'Content-Type': 'application/json'
          }
        });
        result = await result.json();        
        if (result) {
          alert("Product add successfuly.")
          navigate('/')
        }

      }
      else{
        alert("Please complete all Fields!")
      }
    }

  return (
    <div className='signBox-center'>
      <div className='signBox' style={{marginTop: "6%"}}>
          <h2>Add-Product</h2>

          <input className='productBox' value={name} onChange={(text) => setName(text.target.value)} type='text' placeholder='Enter Name' />
          <input className='productBox' value={brand} onChange={(text) => setBrand(text.target.value)} type='text' placeholder='Enter Brand-Name' />
          <input className='productBox' value={price} onChange={(text) => setPrice(text.target.value)} type='text' placeholder='Enter Price' />
          <input className='productBox' value={category} onChange={(text) => setCategory(text.target.value)} type='text' placeholder='Enter Category' />
          
          <button className='btnBox' type='button' onClick={submit} >Add-Product</button>
      </div>
    </div>
  )
}

export default AddProduct