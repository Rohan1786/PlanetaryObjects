import React, { useState, useRef } from 'react';
import './Uranus.css'; // Import the external CSS file
import { Link } from 'react-router-dom';

const Uranus = () => {
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
            src="uranus.png"
            alt="Uranus"
            className="earth w-40 md:w-56 rounded-full rotating-earth mx-auto"
            onClick={playSound} // Play sound when image is clicked
          />
          <div className="md:ml-6 flex-col space-y-4 text-center md:text-left">
            <h1 className="font-bold font-mono animated-text text-3xl md:text-4xl">
              Hello, I am Uranus
            </h1>
            <p className="text-base md:text-lg leading-relaxed font-IBM">
  Uranus is the seventh planet from the Sun and is unique for its sideways rotation. 
  Unlike other planets, Uranus is an ice giant with extremely cold temperatures, reaching as low as -224°C (-371°F). 
  It has faint rings and 27 known moons, making it a mysterious and distant member of our solar system.
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

export default Uranus;
