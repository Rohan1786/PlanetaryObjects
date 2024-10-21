import React, { useState } from 'react';
import './PlanetarySystem.css';

const planetsData = [
  { name: 'Mercury', info: 'Mercury is the closest planet to the Sun.', image: 'mercury.gif' },
  { name: 'Venus', info: 'Venus is the second planet from the Sun.', image: 'venus.gif' },
  { name: 'Earth', info: 'Earth is our home planet.', image: 'logo.jpg' },
  { name: 'Mars', info: 'Mars is the fourth planet and is known as the Red Planet.', image: 'mars.jpg' },
  { name: 'Jupiter', info: 'Jupiter is the largest planet in the solar system.', image: 'jupiter.gif' },
  { name: 'Saturn', info: 'Saturn is known for its rings.', image: 'saturn.jpg' },
  { name: 'Uranus', info: 'Uranus is an ice giant.', image: 'uranus.jpg' },
  { name: 'Neptune', info: 'Neptune is the farthest planet from the Sun.', image: 'neptune.jpg' },
];

const PlanetarySystem = () => {
  const [selectedPlanet, setSelectedPlanet] = useState(null);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  return (
    <div className="planetary-system text-white">
      <div className="sun">
        <img src="sun.jpg" alt="Sun" />
      </div>

      <div className="orbit-container">
        {planetsData.map((planet, index) => (
          <div key={index} className={`orbit orbit-${index + 1}`}>
            <img
              src={planet.image}
              alt={planet.name}
              className="planet"
              onClick={() => handlePlanetClick(planet)}
              style={{ animationDelay: `${index * 2}s` }} // staggered animation
            />
          </div>
        ))}
      </div>

      {selectedPlanet && (
        <div className="info-box">
          <h2>{selectedPlanet.name}</h2>
          <p>{selectedPlanet.info}</p>
          <button onClick={() => setSelectedPlanet(null)}>Close</button>
        </div>
      )}
    </div>
  );
};

export default PlanetarySystem;
