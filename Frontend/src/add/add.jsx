import React, { useEffect, useState } from 'react';
import './add.css';
import { Link, useNavigate } from "react-router-dom";

export default function Add() {
    const [name, setName] = useState('');
    const [des, setDes] = useState('');
    const [address, setAddress] = useState('');
    
    const [message, setMessage] = useState('');
    const navigate = useNavigate(); 

    const handleclick = (e) => {
        e.preventDefault();
        
        const pet = { name, address, des };

        fetch("http://localhost:8080/pet/add", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(pet)
        })
        .then(() => {
            setMessage("New pet added successfully!");
            setName('');
            setDes('');
            setAddress('');
            navigate('/table');  
        })
        .catch(error => {
            console.error('Error adding pet and file data:', error);
        });
    };

    return (
        <div className="containerss">
            <h1>Add a New Pet</h1>
            <form id="addPetForm" onSubmit={handleclick}>
                <div className="form-groupss">
                    <label>Name:</label>
                    <input 
                        type="text" 
                        id="petName" 
                        name="petName" 
                        required 
                        value={name} 
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="form-groupss">
                    <label>Description:</label>
                    <input 
                        type="text" 
                        id="des" 
                        name="des" 
                        required 
                        value={des} 
                        onChange={(e) => setDes(e.target.value)}
                    />
                </div>
                <div className="form-groupss">
                    <label>Price:</label>
                    <input 
                        type="number" 
                        id="petAge" 
                        name="petAge" 
                        required
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                    />
                </div>
                <button type="submit" className="buttonss">Submit</button> &nbsp;&nbsp;
                <Link className="btnss" to="/table">Cancel</Link>
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}
