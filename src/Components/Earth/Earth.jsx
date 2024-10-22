import React, { useState } from 'react'
import './EarthStyle.css'; // Import the external CSS file

const Earth = () => {
    const [Solar, setSolar] = useState();
    const SolarCall = () => {
        window.location.href = '/solarSystem'; // Corrected 'Window' to 'window'
      };
  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-r from-black to-blue-900">
      <div className="card bg-black p-6 rounded-lg shadow-2xl text-white transform hover:scale-105 transition-transform duration-500">
        <div className="earth-container flex items-center">
          {/* Rotating Earth Image */}
          <img src="earth.jpg" alt="Earth" className="earth h-auto w-56 rounded-full shadow-lg rotating-earth" />
          <div className='ml-6 flex-col space-y-4'>
            <h1 className='font-bold font-mono animated-text text-4xl'>Hello, I am Earth</h1>
            <p className='text-lg leading-relaxed font-IBM'>
              The third planet from the Sun, Earth is the only world known to harbor life. 
              Its atmosphere shields life from harmful solar radiation and helps maintain the planet's temperature.
              Our home is 4.5 billion years old and continues to evolve.
            </p>
            <p className='text-lg leading-relaxed font-IBM'>
              Covered by oceans and filled with diverse ecosystems, Earth supports millions of species, including humans.
              Its rotation creates day and night, and it takes 365 days to orbit the Sun, creating the cycle of seasons.
            </p>
            <div>
      <button onClick={SolarCall} className='font-kablammo font-bold  shadow'>I belong to the Solar System</button>
    </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default Earth;
