import React from 'react';

const Display = props => {
  const {state = []} = props;
  return (
    <div className="Display">
      <h2>B: {state.ball}</h2>
      <h2>S: {state.strike}</h2>
    </div>
  );
};

export default Display;
