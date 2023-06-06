import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Card(props) {
  const navigation = useNavigate();
  const Buy = (id) => {
    navigation('/Buy/'+id);
  }
  return (
    <div>
      <div className="card" style={{width: '18rem'}}>
  <div className='offer' >
     <h5>{props.per}% offer</h5>
     </div>
   <img src={props.imgsrc} className="card-img-top" alt={props.title} height={'250px'}  />
  <div className="card-body">
    <h5 className="card-title">{props.title}</h5>
    <p className="card-text">net.wt:-{props.kg}kg</p>
    <p className="card-text">Rs:-{props.price}/- </p>
    <a className="btn btn-primary" onClick={()=>Buy(props.id)}>Buy</a>
  </div>
</div>
    </div>
  )
}
