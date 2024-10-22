import React, { useState } from 'react';
import './EarthStyle.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const Earth = () => {
  const [Solar, setSolar] = useState();
  const SolarCall = () => {
    window.location.href = '/solarSystem'; // Corrected 'Window' to 'window'
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-r from-black to-blue-900 px-4">
      <div className="card bg-black p-6 rounded-lg shadow-2xl text-white transform hover:scale-105 transition-transform duration-500 max-w-4xl w-full">
        <div className="earth-container flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          {/* Rotating Earth Image */}
          <img
            src="earth.jpg"
            alt="Earth"
            className="earth w-40 md:w-56 rounded-full shadow-lg rotating-earth mx-auto"
          />
          <div className="md:ml-6 flex-col space-y-4 text-center md:text-left">
            <h1 className="font-bold font-mono animated-text text-3xl md:text-4xl">
              Hello, I am Earth
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-IBM">
              The third planet from the Sun, Earth is the only world known to harbor life. 
              Its atmosphere shields life from harmful solar radiation and helps maintain the planet's temperature.
              Our home is 4.5 billion years old and continues to evolve.
            </p>
            <p className="text-base md:text-lg leading-relaxed font-IBM">
              Covered by oceans and filled with diverse ecosystems, Earth supports millions of species, including humans.
              Its rotation creates day and night, and it takes 365 days to orbit the Sun, creating the cycle of seasons.
            </p>
            <div>
              <button className="font-kablammo font-bold bg-blue-500 text-white px-4 py-2 rounded-lg shadow hover:bg-blue-600 transition duration-300">
              <Link
            to="/solarsystem"
            className="text-white hover:text-yellow-400 text-lg transition-all duration-300"
          >
            Visit Our Solar System
          </Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Earth;
