import React, { useState, useEffect } from 'react';

const interests = ["UI/UX Designer", "Web Developer", "Creative Thinker", "Artist 👩🏻‍🎨🖼️"]; 
const RotatingTitles = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((currentIndex) => (currentIndex + 1) % interests.length);}, 3000); 
    return () => clearInterval(interval);
    }, [currentIndex]);

    return (
    <h1>{interests[currentIndex]}</h1> 
    );
    };

export default RotatingTitles;