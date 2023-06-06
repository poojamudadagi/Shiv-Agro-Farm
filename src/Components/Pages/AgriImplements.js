import React, { useEffect, useState } from 'react';
import Card from '../Card';

export default function AgriImplements() {
    const [Productsdata, Productsdatachange] = useState(null);



    useEffect(() => {
        fetch(" http://localhost:8000/Products").then((res) => {
            return res.json();
        },[]).then((resp) => {
            Productsdatachange(resp);
        }).catch((err) => {
            console.log(err.message);
        })
    })
    return (
        <div className='container'>
          <div className='row'>
            { Productsdata && Productsdata.filter((Productsdata) => Productsdata.ProductType === "AgriImplements").map(item => (<div className='col-4 my-4'>
                                  <Card per={item.percentage} 
                                        imgsrc={item.ProductImage} 
                                        title={item.ProductName} 
                                        kg={item.kg} 
                                        price={item.Price}
                                        id = {item.id}/></div>
                                ))
                            }
              </div>          
        </div>
    )
}
