import React, { useState, useEffect } from 'react';
import './product.css';

export default function Product() {
  const [pets, setPets] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/pet/getAll")
      .then(res => res.json())
      .then((result) => {
        setPets(result);
      });
  }, []);

  return (
    <div className="containers">
      {pets.map(pet => (
        <div className="cards" key={pet.id}>
          <div className="cards-content">
            <div className="product-name">{pet.name}</div>
            <div className="product-des">{pet.des}</div>
            <div className="price">Rs. {pet.address}</div>
          </div>
        </div>
      ))}
    </div>
  );
}
