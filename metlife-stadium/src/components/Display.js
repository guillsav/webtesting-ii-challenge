import React from 'react';
import './Display.css';

const Display = props => {
  const {state = []} = props;
  return (
    <div className="Display">
      <h2 data-testid="balls">B: {state.ball}</h2>
      <h2> - </h2>
      <h2 data-testid="strikes">S: {state.strike}</h2>
    </div>
  );
};

export default Display;
