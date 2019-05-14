import React from 'react';

const Display = props => {
  const {ball, strike} = props.state;
  return (
    <div className="Display">
      <h2>B: {ball}</h2>
      <h2>S: {strike}</h2>
    </div>
  );
};

export default Display;
