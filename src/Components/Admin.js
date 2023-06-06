import React,{useState } from "react";
import {  useNavigate } from "react-router-dom";


function Admin() {
    
  const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

  
    const handleSubmit = (event) => {
    event.preventDefault();
        fetch("http://localhost:8000/Admin/"+username).then((res)=>{
            return res.json();
        }).then((resp)=>{
            // console.log(resp)
            if (Object.keys(resp).length === 0) {
                alert("Please Enter Valid Username")
            } 
            else{
                if(resp.password === password){
                    sessionStorage.setItem('username',username);
                    navigate('/Product')
                    window.location.reload();
                }else{
                    alert("Please Enter Valid Credentials")
                }
            }
        }).catch((err)=>{
            alert("Login Failed due to : " + err.message)
        })
    };

    return (<div className="Body" id="admin-log">
        
                    <form className="form-control" onSubmit={handleSubmit}>
                    
                    <h3 className="form-title" style={{textAlign:"center"}}>Login</h3>
                        <div className="input-container" style={{textAlign:"center"}}>
                        <input placeholder="Enter User Name" type="Text" id="Text" style={{width:"350px"}} onChange={(e)=>setUsername(e.target.value)} required/>
                    </div>
                    <div className="input-container" style={{textAlign:"center"}}>
                        <input placeholder="Enter password" type="password" id="Password" style={{width:"350px"}} onChange={(e)=>setPassword(e.target.value)} required/>
                        </div>
                        <button className="submit-it" id="it" type="submit" style={{alignContent:"center"}}>Login</button>

                  </form>
                </div>
                );
}

export default Admin;