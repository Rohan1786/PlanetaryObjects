import React, { useState, useRef, useEffect } from 'react';
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
  const planetaryRotationRef = useRef(null);
  const planetarySystemRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [lastMouseX, setLastMouseX] = useState(0);
  const [lastMouseY, setLastMouseY] = useState(0);
  const [currentRotationX, setCurrentRotationX] = useState(30); // initial tilt
  const [currentRotationY, setCurrentRotationY] = useState(45); // initial Y rotation

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  useEffect(() => {
    const planetarySystem = planetarySystemRef.current;

    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - lastMouseX;
      const deltaY = event.clientY - lastMouseY;

      setCurrentRotationY((prevY) => prevY + deltaX * 0.1); // adjust rotation speed
      setCurrentRotationX((prevX) => prevX - deltaY * 0.1);

      planetaryRotationRef.current.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

      setLastMouseX(event.clientX);
      setLastMouseY(event.clientY);
    };

    const handleMouseDown = (event) => {
      setIsDragging(true);
      setLastMouseX(event.clientX);
      setLastMouseY(event.clientY);
    };

    const handleMouseUp = () => {
      setIsDragging(false);
    };

    planetarySystem.addEventListener('mousemove', handleMouseMove);
    planetarySystem.addEventListener('mousedown', handleMouseDown);
    document.addEventListener('mouseup', handleMouseUp);

    return () => {
      planetarySystem.removeEventListener('mousemove', handleMouseMove);
      planetarySystem.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, lastMouseX, lastMouseY, currentRotationX, currentRotationY]);

  return (
    <div className="planetary-system text-white" ref={planetarySystemRef}>
      {/* Sun in the center */}
      <div className="sun">
        <img src="sun.jpg" alt="Sun" />
      </div>

      {/* 3D rotating planetary system */}
      <div className="planetary-rotation" ref={planetaryRotationRef}>
        <div className="orbit-container">
          {planetsData.map((planet, index) => (
            <div key={index} className={`orbit orbit-${index + 1}`}>
              <img
                src={planet.image}
                alt={planet.name}
                className="planet"
                onClick={() => handlePlanetClick(planet)}
                style={{ animationDelay: `${index * 2}s` }} // staggered animation for planet orbits
              />
            </div>
          ))}
        </div>
      </div>

      {/* Information box for the selected planet */}
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
