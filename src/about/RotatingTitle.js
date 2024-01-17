import React, { useState, useEffect } from 'react';

const interests = ["Frontend Developer", "Web Designer", "Creative Thinker", "Artist 👩🏻‍🎨🖼️"]; 
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