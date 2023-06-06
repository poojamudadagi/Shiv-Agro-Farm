import React, { useState } from 'react'
import { useNavigate } from "react-router-dom";

function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const navigate = useNavigate();
  const handleSubmit = (event) => {

    event.preventDefault();
    const user = { name , email, phone, message };
      //console.log(user);
        fetch("http://localhost:8000/contact",{
          method:"POST",
          headers:{'content-type':'application/json'},
          body:JSON.stringify(user)
        }).then((res)=>{
          alert("Your details Submitted successfully..");
          navigate('/')
        }).catch((err)=>{
          alert("Failed : " + err.message );
        });
};

  return (
    <div className='contact-demo'>
<form onSubmit={handleSubmit}>
    <h3>Contact Us</h3>
    <input type='text' id="Text"  onChange={(e)=>setName(e.target.value)}  placeholder='your name' required />
    
    <input type='email'  id="Text"  onChange={(e)=>setEmail(e.target.value)} placeholder='Email id' required />
    <input type='text'  id="Text"  onChange={(e)=>setPhone(e.target.value)} placeholder='Phone no.' required />
    <textarea  id="Text"  onChange={(e)=>setMessage(e.target.value)}   placeholder='How Can We Help You?'></textarea>
    <button type='submit'  value={'Submit Form'}>Submit</button>
   </form>
   
  </div>

    
  )
}

export default Contact;
