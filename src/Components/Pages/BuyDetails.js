import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function buyDetails() {
    const [Productsdata, Productsdatachange] = useState(null);

    const navigate = useNavigate();

    
    const RemoveFunction = (id) => {
        if (window.confirm("do you want to remove")) {
            fetch("http://localhost:8000/buyDetails/"+id , {
                method: 'DELETE'
            }).then((res) => {
                alert("Removed successfully");
                window.location.reload();
            }).catch((err) => {
                console.log(err.message)
            })
        }
    }


    useEffect(() => {
        fetch(" http://localhost:8000/buyDetails").then((res) => {
            return res.json();
        },[]).then((resp) => {
            Productsdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    })
    return (
        <div className='container'>
            <div className='card'>
                <div className='card-title'>
                    <h2 style={{'textAlign':'center'}}>Products</h2>
                </div>
                <div className='card-body'>
                   
                    <table className='table table-bordered'>
                        <thead className='bg-dark text-white'>
                            <tr>
                                <td>Id</td>
                                <td>FullName</td>
                                <td>Email</td>
                                <td>Phone Number</td>
                                <td>PermanentAddress</td>
                                <td>ProductType</td>
                                <td>ProductName</td>
                                <td>ProductImage</td>
                                <td>Price</td>
                                <td>percentage</td>
                                <td>kgs</td>
                                <td>Payment</td>
                            </tr>
                        </thead>
                        <tbody>
                            
                            { Productsdata &&
                                 Productsdata.map(item => (
                                    <tr key={item.id}>
                                        <td>{item.id}</td>
                                        <td>{item.ProductType}</td>
                                        <td>{item.ProductName}</td>
                                        <td>{item.ProductImage}</td>
                                        <td>{item.percentage}</td>
                                        <td>{item.kg}</td>
                                        <td>{item.Price}</td>
                                        <td>
                                           
                                            <button onClick={() => { RemoveFunction(item.id) }} className='btn btn-danger'>Remove</button></td>
                                    </tr>
                                ))
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    )
}
