import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import './Edit.css'

export default function Edit() {
  let navigate = useNavigate();

  const { id } = useParams();
  
  const [pet, setPets] = useState({
    name: "",
    address: "",
    des: ""
  });

  const { name, address, des } = pet;

  const onInputChange = (e) => {
    setPets({ ...pet, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadPets();
}, []);

const onSubmit = async (e) => {
  e.preventDefault();
  try {
    await axios.put(`http://localhost:8080/pet/${id}`, pet);
    navigate("/table");
  } catch (error) {
    console.error("Error updating pet:", error);
  }
};

const loadPets = async () => {
  try {
    const result = await axios.get(`http://localhost:8080/pet/getAll/${id}`);
    setPets(result.data);
  } catch (error) {
    console.error("Error fetching pet:", error);
  }
};

  return (
    <div className="containerss">
    <h1>Edit Pet</h1>
          <form onSubmit={(e) => onSubmit(e)}>
          <div className="form-groupss">
            <label>Name:</label>
            <input type="text" id="name" name="name" required 
                value={name} 
                onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="form-groupss">
            <label>Description:</label>
            <input type="text" id="des" name="des" required 
                value={des} 
                onChange={(e)=>onInputChange(e)}
            />
          </div>
          <div className="form-groupss">
            <label>Price:</label>
            <input type="number" id="address" name="address" required
                value={address} 
                onChange={(e)=>onInputChange(e)}
            />
          </div>
            <button type="submit" className="buttonss">
              Submit
            </button> &nbsp;&nbsp;
            <Link className="btnss" to="/table">
              Cancel
            </Link>
          </form>
        </div>
  );
}