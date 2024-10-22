import React, { useState, useRef } from 'react';
import './Vinus.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const Vinus = () => {
  const audioRef = useRef(null); // Create a reference to the audio element

  // Function to play audio when Earth image is clicked
  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center text-white bg-gradient-to-r from-black to-blue-900 px-4">
      {/* Audio element with ref */}
      <audio ref={audioRef}>
        <source src="earthSound.mp3" type="audio/mpeg" />
        Your browser does not support the audio element.
      </audio>

      <div className="card bg-black p-6 rounded-lg shadow-2xl text-white transform hover:scale-105 transition-transform duration-500 max-w-4xl w-full">
        <div className="earth-container flex flex-col md:flex-row items-center space-y-6 md:space-y-0">
          {/* Rotating Earth Image with click event to play sound */}
          <img
            src="venus.gif"
            alt="Vinus"
            className="earth w-40 md:w-56 rounded-full rotating-earth mx-auto"
            onClick={playSound} // Play sound when image is clicked
          />
          <div className="md:ml-6 flex-col space-y-4 text-center md:text-left">
            <h1 className="font-bold font-mono animated-text text-3xl md:text-4xl">
              Hello, I am Venus
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-IBM">
  Venus is often called Earth's "sister planet" due to its similar size and composition, but it has a vastly different environment. 
  It is the second planet from the Sun and the hottest in our solar system, with surface temperatures reaching around 465°C (869°F). 
  This extreme heat is due to its thick atmosphere, which is composed mostly of carbon dioxide and traps heat in a runaway greenhouse effect. 
  Venus also has clouds of sulfuric acid and experiences crushing atmospheric pressure at its surface. 
  Despite its harsh conditions, Venus remains a subject of fascination due to its mysterious, slow rotation and retrograde spin.
</p>

            <p className="text-base md:text-lg leading-relaxed font-IBM">
              Do you Wanna here My Sound just click on me
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

export default Vinus;
