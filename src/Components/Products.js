import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom'

function Products() {
    const [product , setProduct] = useState([]);
    // const navigate = useNavigate();


    const allProducts = async () => {
        let result = await fetch("http://localhost:5000/products")
        let data = await result.json()
        setProduct(data);
    }

    const deleteProduct = async (id) => {
        await fetch(`http://localhost:5000/delete-product/${id}`,{
            method: 'DELETE',
        }).then(() => {
            allProducts();
            console.log("Product Deleted");
        })
    }


    useEffect(() => {
        allProducts();
    },[])

  return (
    <div style={{}}>
        {
            product.map( (item , index) => {
                return(
                    <div className='card-Product' key={index}>
                        <img 
                            src='https://images.priceoye.pk/apple-iphone-14-pakistan-priceoye-3j7db.jpg'
                            alt='alt-products'
                            className='card-img'
                        />
                        <hr className='card-line' />

                        <ul className='card-ul'>
                            <li className='card-li' >Name : {item.name}</li>
                            <li className='card-li' >Brand : {item.brand}</li>
                            <li className='card-li' >Price : {item.price}</li>
                            <li className='card-li' >Category : {item.category}</li>
                        </ul>

                        <Link to={`/update/${item._id}`} style={{width: '20px', height: '20px',marginLeft: '192px',marginTop: '-239px',position: 'absolute',backgroundColor: '#fff',border: 0}}>
                        <img 
                            src='https://icon-library.com/images/icon-for-update/icon-for-update-28.jpg'
                            alt='alt-products'
                            style={{width: '20px', height: '20px',}}
                        />
                        </Link>
                        <button onClick={() => deleteProduct(item._id)} style={{width: '20px', height: '20px',marginLeft: '215px',marginTop: '-238.5px',position: 'absolute',backgroundColor: '#fff',border: 0, }}>
                        <img 
                            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQhRP74q67IE5S2oGOcIhjFymsmAp0veLqskQ&usqp=CAU'
                            alt='alt-products'
                            style={{width: '16px', height: '16px',}}
                        />
                        </button>
                    </div>
                )
            })
        }
    </div>
  )
}

export default Products