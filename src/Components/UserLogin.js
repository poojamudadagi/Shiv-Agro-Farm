import React,{useState } from "react";
import { Link, useNavigate } from "react-router-dom";



function UserLogin() {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    
    const navigate = useNavigate();

  
    const handleSubmit = (event) => {
    event.preventDefault();
        fetch("http://localhost:8000/users/"+username).then((res)=>{
            return res.json();
        }).then((resp)=>{
            // console.log(resp)
            if (Object.keys(resp).length === 0) {
                alert("Please Enter Valid Username")
            } 
            else{
                if(resp.password === password){
                    sessionStorage.setItem('username',username);
                    navigate('/')
                    window.location.reload();
                }else{
                    alert("Please Enter Valid Credentials")
                }
            }
        }).catch((err)=>{
            alert("Login Failed due to : " + err.message)
        })
    };

    return (<div className="Body">
        
                    <form className="form-control" onSubmit={handleSubmit} id="user">
                    <div className="user-container">
                    <h2 className="form-title">Login to your account</h2>
                        <div className="input-container">
                        <input placeholder="Enter User Name" type="Text" id="Text"  onChange={(e)=>setUsername(e.target.value)} required/>
                    </div><br></br>
                    <div className="input-container">
                        <input placeholder="Enter password" type="password" id="Password"  onChange={(e)=>setPassword(e.target.value)} required/>
                        </div><br></br>
                        <button className="submit" id='userlogin' type="submit">Login</button><br></br>

                    <p className="signup-link">
                        No account?
                        <Link to="/Register">Registration</Link>
                    </p>
                    </div>
                </form>
                </div>);
}

export default UserLogin;