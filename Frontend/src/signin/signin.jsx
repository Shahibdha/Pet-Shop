import React, { useState,useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import './signin.css'

export default function Signin() {
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        const user = { name, password };

        try {
            const response = await fetch("http://localhost:8080/user/login", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(user)
            });
            const data = await response.text();

            console.log("Response status:", response.status);
            console.log("Response data:", data);

            if (response.status === 200) {
                setMessage("logged in successfully!");
                setName('');
                setPassword('');
                navigate('/home');
            } 
            else  if ((name === "Admin") && (password === "Admin123")){
                setMessage("logged in successfully!");
                setName('');
                setPassword('');
                navigate('/table');
            } 
            else {
                setMessage(data.message || "Invalid login credentials");
            }
        } catch (error) {
            console.error("Error logging in:", error);
            setMessage("An error occurred while logging in");
        }
        
    };

    return (
        <div className="container">
            <h3 className="headers">LOGIN</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <input 
                        type="texts" 
                        name="name" 
                        className="forms" 
                        placeholder="Name" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <input 
                        type="password" 
                        className="forms" 
                        name="password" 
                        placeholder="Password" 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)}
                        required 
                    />
                </div>
                <div className="form-group">
                    <button type="submit" className="btni btn-primary btn-block submit px-3">Sign Up</button>
                </div>
                <div className="footer">
					<Link to="/signup">
                        Do not have an account? &nbsp;&nbsp;&nbsp;<span>Sign In</span>
                    </Link>
                </div>
            </form>
            
            {message && <p>{message}</p>}
        </div>
    );
}
