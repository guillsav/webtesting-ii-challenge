import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [state, setState] = useState({
    ball: 0,
    strike: 0,
    hit: 0
  });

  let {strike, ball, hit} = state;

  const onBallClick = () => {
    if (ball <= 2 && strike <= 2 && hit === 0) {
      setState({
        ball: ball + 1,
        strike,
        hit: 0
      });
    } else {
      setState({
        ball: 0,
        strike: 0,
        hit: 0
      });
    }
  };

  const onStrikeClick = () => {
    if (strike < 2) {
      setState({
        strike: strike + 1,
        ball,
        hit: 0
      });
    } else {
      setState({
        ball: 0,
        strike: 0,
        hit: 0
      });
    }
  };

  const onFoulClick = () => {
    if (strike < 2 && ball <= 3 && hit === 0) {
      setState({
        strike: strike + 1,
        ball,
        hit: 0
      });
    } else if (strike === 2) {
      setState({
        strike: 2,
        ball,
        hit: 0
      });
    }
  };

  const onHitClick = () => {
    setState({
      ball: 0,
      strike: 0,
      hit: 0
    });
  };

  return (
    <div className="App">
      <Display state={state} />
      <Dashboard
        onBallClick={onBallClick}
        onFoulClick={onFoulClick}
        onStrikeClick={onStrikeClick}
        onHitClick={onHitClick}
      />
    </div>
  );
}

export default App;
