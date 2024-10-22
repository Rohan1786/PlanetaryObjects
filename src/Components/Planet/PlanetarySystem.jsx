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
  const [currentRotationX, setCurrentRotationX] = useState(30);
  const [currentRotationY, setCurrentRotationY] = useState(45);

  const handlePlanetClick = (planet) => {
    setSelectedPlanet(planet);
  };

  useEffect(() => {
    const planetarySystem = planetarySystemRef.current;

    const handleMouseMove = (event) => {
      if (!isDragging) return;

      const deltaX = event.clientX - lastMouseX;
      const deltaY = event.clientY - lastMouseY;

      setCurrentRotationY((prevY) => prevY + deltaX * 0.1);
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

    // For touch support on mobile devices
    planetarySystem.addEventListener('touchmove', (event) => {
      if (!isDragging) return;

      const touch = event.touches[0];
      const deltaX = touch.clientX - lastMouseX;
      const deltaY = touch.clientY - lastMouseY;

      setCurrentRotationY((prevY) => prevY + deltaX * 0.1);
      setCurrentRotationX((prevX) => prevX - deltaY * 0.1);

      planetaryRotationRef.current.style.transform = `rotateX(${currentRotationX}deg) rotateY(${currentRotationY}deg)`;

      setLastMouseX(touch.clientX);
      setLastMouseY(touch.clientY);
    });

    planetarySystem.addEventListener('touchstart', (event) => {
      const touch = event.touches[0];
      setIsDragging(true);
      setLastMouseX(touch.clientX);
      setLastMouseY(touch.clientY);
    });

    planetarySystem.addEventListener('touchend', () => {
      setIsDragging(false);
    });

    return () => {
      planetarySystem.removeEventListener('mousemove', handleMouseMove);
      planetarySystem.removeEventListener('mousedown', handleMouseDown);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, lastMouseX, lastMouseY, currentRotationX, currentRotationY]);

  return (
    <div className="planetary-system w-full h-full flex justify-center items-center relative" ref={planetarySystemRef}>
      {/* Sun in the center */}
      <div className="sun absolute">
        <img src="sun.jpg" alt="Sun" className="w-32 md:w-64" />
      </div>

      {/* 3D rotating planetary system */}
      <div className="planetary-rotation w-full h-full" ref={planetaryRotationRef}>
        <div className="orbit-container relative w-full h-full">
          {planetsData.map((planet, index) => (
            <div key={index} className={`orbit orbit-${index + 1}`}>
              <img
                src={planet.image}
                alt={planet.name}
                className="planet w-10 md:w-12 lg:w-14"
                onClick={() => handlePlanetClick(planet)}
                style={{ animationDelay: `${index * 2}s` }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Info box for selected planet */}
      {selectedPlanet && (
        <div className="info-box absolute bg-white text-black p-4 rounded-lg shadow-md transition-transform transform scale-0 animate-scale-up-center">
          <h2 className="text-lg md:text-xl">{selectedPlanet.name}</h2>
          <p className="mt-2 text-sm md:text-base">{selectedPlanet.info}</p>
          <button className="mt-4 px-3 py-2 bg-blue-500 text-white rounded-md" onClick={() => setSelectedPlanet(null)}>
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default PlanetarySystem;
