import React from 'react';

const Background = () => {
  const style = {
    position: 'fixed', 
    top: 0,
    left: 0,
    width: '100vw', 
    height: '100vh', 
    backgroundColor: 'black', 
    zIndex: -1
  };

  return <div style={style} />;
};

export default Background;
