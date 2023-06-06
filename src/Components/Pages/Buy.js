import React, { useEffect, useState } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';

function Buy() {
    const { Id } = useParams();

    useEffect(() => {
        fetch("http://localhost:8000/Products/" + Id).then((res) => {
            return res.json();
        }).then((resp) => {
            ProductTypechange(resp.ProductType);
            ProductNamechange(resp.ProductName);
            ProductImagechange(resp.ProductImage);
            Pricechange(resp.Price);
            setpercentage(resp.percentage);
            setkg(resp.kg);
        }).catch((err) => {
            console.log(err.message);
        })
    }, []);

    const [ProductType, ProductTypechange] = useState("");
    const [ProductName, ProductNamechange] = useState("");
    const [ProductImage, ProductImagechange] = useState("");
    const [Price, Pricechange] = useState("");
    const[percentage,setpercentage]=useState("");
    const[kg,setkg]=useState("");
    const[FullName,setFullname]=useState("");
    const[Email,setEmail]=useState("");
    const[PermanentAddress,setPermanentAddress]=useState("")
    const[PhoneNumber,setPhoneNumber]=useState("");
    const[Payment,setPayment]=useState("")

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const Productsdata = { ProductType, ProductName, ProductImage, Price,percentage,kg,FullName,Email,PermanentAddress,PhoneNumber,Payment };

        fetch("http://localhost:8000/buyDetails", {
            method: 'POST',
            headers: { "content-type": "application/json" },
            body: JSON.stringify(Productsdata)
        }).then((res) => {
            alert("Order Confirmed");
            navigate('/')
        }).catch((err) => {
            console.log(err.message)
        })
    };
    return (
        <div>
            <div className="offset-lg-3 col-lg-5">
                <form className="container" onSubmit={handleSubmit}  >
                    <div className="card" id="Register">
                        <div className="card-header">
                            <h1>Purchase Items</h1>
                        </div>
                        <div className="card-body">

                            <h2>Personal Details</h2>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Full Name<span className="errmsg">*</span></label>
                                    <input type='text' className="form-control" onChange={e=>setFullname(e.target.value)}></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Email<span className="errmsg">*</span></label>
                                    <input type='email' className="form-control" onChange={e=>setEmail(e.target.value)}></input>
                                </div>
                                <div className="col-lg-12">
                                <div className="form-group">
                                    <label>PhoneNumber<span className="errmsg">*</span></label>
                                    <input className="form-control" type='number' onChange={e=>setPhoneNumber(e.target.value)}></input>
                                </div>
                            </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Permanent Adrress<span className="errmsg">*</span></label>
                                    <input className="form-control" type='text' onChange={e=>setPermanentAddress(e.target.value)}></input>
                                </div>
                            </div>
                           
                            <div className="col-lg-12">
                                <h2>Product Details</h2>
                                <div className="form-group">
                                    <label>Product Type<span className="errmsg">*</span></label>
                                    <input className="form-control" value={ProductType} disabled></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Product Name<span className="errmsg">*</span></label>
                                    <input className="form-control" value={ProductName} disabled></input>
                                </div>
                            </div>
                            <div className="col-lg-12">
                                <div className="form-group">
                                    <label>Product Image<span className="errmsg">*</span></label>
                                    <img src={ProductImage} alt={ProductName} width={"100%"}/>
                                </div>
                                <div className="col-lg-12">
                                    <div className="form-group">
                                        <label>Price<span className="errmsg">*</span></label>
                                        <input className="form-control" value={Price} disabled></input>
                                    </div>
                                    <div className="form-group">
                                        <label>Kgs<span className="errmsg">*</span></label>
                                        <input className="form-control" value={kg} disabled></input>
                                    </div>
                                </div>
                                <select class="form-select" aria-label="Default select example"  onChange={e=>setPayment(e.target.value)}>
                                    <option selected disabled>Payment</option>
                                    <option>Cash On Delivery</option>

                                </select>

                            </div>
                        </div>
                        <div className="card-footer">
                            <button type="submit" className="btn btn-primary" >Order</button>
                            <a href="/" className="btn btn-danger">Back</a>
                        </div>
                    </div>
                </form>
            </div>

        </div>
    );

}

export default Buy