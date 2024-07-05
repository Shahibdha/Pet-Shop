import React from 'react'
import './about.css'
import { Link } from 'react-router-dom';
export default function about() {
  return (
    <div className='intro'>
        <div className="i-left">
            <div className="i-name">
                <span className='about_us'>About <span className='shady'>WHISKERS</span></span>
                
                <span className='para'>Welcome to "Paws and Whiskers Pet Emporium," a charming and vibrant pet shop nestled in the heart of the community. As you step through the cheerful double doors, you are greeted by the melodic sounds of chirping birds, soft purring, and the occasional playful bark. The air is filled with a comforting blend of scents - from the earthy aroma of wood shavings to the delicate fragrance of pet-friendly shampoos.</span>  
                <span className='para'>In the aquatic section, gleaming tanks house an array of vibrant fish, from the dazzling hues of tropical species to the calm and graceful movements of freshwater favorites. The gentle hum of water filters creates a soothing ambiance, inviting customers to explore the fascinating world of underwater life.</span> 
                <span className='para'>Knowledgeable and friendly staff members, easily identifiable in their vibrant uniforms, are always on hand to provide expert advice, answer queries, and ensure a delightful shopping experience. "Paws and Whiskers Pet Emporium" is not just a store; it's a haven for pet lovers, fostering a sense of community and celebrating the joy that pets bring to our lives.</span> 
            </div>
            <Link to="/product" className='buttoni' style={{ marginTop: '2rem' }} >Explore</Link>
        </div>
      
      <div className="i-right">
        <img src="https://img.freepik.com/free-photo/dog-made-by-artist_1340-37216.jpg?t=st=1709462859~exp=1709466459~hmac=deaf8293dbdf28079e95667b7fbd9c12e7eca85c7b38018192932bf4d462445c&w=900" alt="Dog Artwork" />
      </div>
    </div>
  )
}
