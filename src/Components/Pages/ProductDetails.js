import React, { useEffect,useState } from 'react'
import { useParams } from 'react-router-dom';
import {Link} from 'react-router-dom'

function ProductDetails() {
  const{Id}=useParams();
  const [Productsdata, Productsdatachange] = useState({});

  useEffect(()=>{
    fetch("http://localhost:8000/Products/"+Id).then((res) => {
      return res.json();
  }).then((resp) => {
      Productsdatachange(resp);
  }).catch((err) => {
      console.log(err.message);
  })
  },[])
  return (
    <div>
     <div className='card' >
      <div className='card-title'>
        <h2 style={{'text-align':'center'}}>Products Detail</h2>
      </div>
      <div className='card-body'></div>
     
      { 
      Productsdata && <div style={{'textAlign':'center'}}>
      <h5>Product Name is : {Productsdata.ProductName} ({Productsdata.id})</h5>

    <h5>Product type is : {Productsdata.ProductType}</h5>
      <h5>Product Price is : {Productsdata.Price}</h5>
      <Link className='btn btn-danger' to='/Product'>Back to Listing</Link>
      </div>
}
    </div>
    </div>
  )
}

export default ProductDetails;
