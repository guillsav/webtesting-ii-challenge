import React from 'react';
import './Dashboard.css';

const Dashboard = props => {
  return (
    <div className="Dashboard">
      <button onClick={props.onBallClick}>Ball</button>
      <button onClick={props.onStrikeClick}>Strike</button>
      <button onClick={props.onFoulClick}>Foul</button>
      <button onClick={props.onHitClick}>Hit</button>
    </div>
  );
};

export default Dashboard;
