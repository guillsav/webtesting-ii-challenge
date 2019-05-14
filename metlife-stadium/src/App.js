import React, {useState} from 'react';
import './App.css';
import Dashboard from './components/Dashboard';
import Display from './components/Display';

function App() {
  const [state, setState] = useState({
    ball: 0,
    strike: 0
  });

  let {strike, ball} = state;

  const onBallClick = () => {
    if (ball <= 2 && strike <= 2) {
      setState({
        ball: ball + 1,
        strike
      });
    } else {
      setState({
        ball: 0,
        strike: 0
      });
    }
  };

  const onStrikeClick = () => {
    if (strike < 2) {
      setState({
        strike: strike + 1,
        ball
      });
    } else {
      setState({
        ball: 0,
        strike: 0
      });
    }
  };

  const onFoulClick = () => {
    if (strike < 2 && ball <= 3) {
      setState({
        strike: strike + 1,
        ball
      });
    } else if (strike === 2) {
      setState({
        strike: 2,
        ball
      });
    }
  };

  const onHitClick = () => {
    setState({
      ball: 0,
      strike: 0
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
