import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import './signup.css';

export default function Signup() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPass] = useState('');
    const [conPass, setConPass] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleclick = (e) => {
        e.preventDefault();
        const user = { name,email,password,conPass };

        fetch("http://localhost:8080/user/add", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(user)
        })
        .then(() => {
            setMessage("Registration successful!");
            setName('');
            setEmail('');
            setPass('');
            setConPass('');
            navigate('/signin');  
        })
        .catch(error => {
            setMessage(`There was a problem with the fetch operation: ${error.message}`);
        });
    };

    return (
<div className="container" style={{ height: '450px' }}>
            <h3 className="headers">CREATE ACCOUNT</h3>
            <form name="signup" onSubmit={handleclick}>
                <div className="form-group">
                    <input 
                        type="texts" 
                        name="name" 
                        className="form-controls" 
                        placeholder="Name" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="email" 
                        name="email" 
                        className="form-controls" 
                        placeholder="Email" 
                        required 
                        value={email} 
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="form-controls" 
                        name="password" 
                        placeholder="Password" 
                        required 
                        value={password} 
                        onChange={(e) => setPass(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <button type="submit" name="submit" className="btni btn-primary btn-block submit px-3">Sign Up</button>
                </div>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
