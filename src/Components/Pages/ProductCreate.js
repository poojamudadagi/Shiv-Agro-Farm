import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const ProductCreate=()=> {


const[ProductType,ProductTypechange]=useState("Seeds");
const[ProductName,ProductNamechange]=useState("");
const[ProductImage,ProductImagechange]=useState("");
const[Price,Pricechange]=useState("");
const[percentage,setpercentage]=useState("");
const[kg,setkg]=useState("");


const navigate=useNavigate();

const handleSubmit=(e)=>{
e.preventDefault();
  const Productsdata=({ProductType,ProductName,ProductImage,Price,percentage,kg});
{/* <Card imgsrc="./images/zinnia.jpg" per="100"  title="ZINNIA SEEDS" kg="100" price="1000"/> */}
fetch("http://localhost:8000/Products",{
  method:'POST',
  headers:{"content-type":"application/json"},
  body:JSON.stringify(Productsdata)
}).then((res)=>{
 alert("saved successfully");
 navigate('/Product')
}).catch((err)=>{
  console.log(err.message)
})
}
  return (
    <div>
        <div className='row'>
            <div className='offset-lg-3 col-lg-6'>
                <form className='container' onSubmit={handleSubmit}> 
                <div className='card'>
                    <div className='card-title'>
                   <h2>Product Create</h2>
                    </div>
                    <div className='card-body'>
                     <div className='row'>
                    <div className='col-lg-12'>
                        <div className='form-group'>
                          <label>ID</label>
                          <input value={"id"} disabled='disabled' className='form-control'/>
                          </div>
                          </div>
                          <div className='col-lg-12'>
                        <div className='form-group'>
                          <label>ProductType</label>
                          <select required value={ProductType} placeholder='ProductType' onChange={e=>ProductTypechange(e.target.value)} className='form-control'>
                               <option>Seeds</option>
                              <option>Fertilisers</option>
                              <option>Pesticides</option>
                              <option>AgriImplements</option>
                            </select>

                          </div>
                          </div>
                          <div className='col-lg-12'>
                        <div className='form-group'>
                          <label>ProductName</label>
                          <input required value={ProductName} onChange={e=>ProductNamechange(e.target.value)} className='form-control'/>
                          </div>
                          </div>
                          <div className='form-group'>
                          <label>percentage</label>
                          <input required value={percentage} onChange={e=>setpercentage(e.target.value)} className='form-control'/>
                          </div>
                          <div className='form-group'>
                          <label>kgs</label>
                          <input required value={kg} onChange={e=>setkg(e.target.value)} className='form-control'/>
                          </div>
                          <div className='col-lg-12'>
                        <div className='form-group'>
                          <label>ProductImage</label>
                          <input  required value={ProductImage} onChange={e=>ProductImagechange(e.target.value)} className='form-control'/>
                          </div>
                          </div>
                          <div className='col-lg-12'>
                        <div className='form-group'>
                          <label>Price</label>
                          <input required value={Price} onChange={e=>Pricechange(e.target.value)} className='form-control'/>
                          </div>
                          </div>
                          <div className='col-lg-12'>
                        <div className='form-group'>
                          <button className='btn btn-success' type='submit' w='30'>Save</button>
                         <Link to='/Product' className='btn btn-danger'>Back</Link>
                        </div>
                          </div>
                     </div>
                    </div>
                </div>
                </form>
                </div>
          
        </div>
    </div>
  )
}

export default ProductCreate

  