import React from 'react';
import ReactDOM from 'react-dom';
import {render, fireEvent} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App />, div);
    ReactDOM.unmountComponentAtNode(div);
  });

  it('should balls and strikes title', () => {
    const {getByText} = render(<App />);

    getByText(/b: 0/i);
    getByText(/s: 0/i);
  });

  it('should render 1 ball', () => {
    const {getByText} = render(<App />);

    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton);
    getByText(/b: 1/i);
  });

  it('should render 1 strike', () => {
    const {getByText} = render(<App />);

    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    getByText(/s: 1/i);
  });

  it('should set the strike count to 2', () => {
    const {getByText} = render(<App />);

    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);
    fireEvent.click(foulButton);
    fireEvent.click(foulButton);
    fireEvent.click(foulButton);

    getByText(/s: 2/i);
  });

  it('should reset ball & strike to 0', () => {
    const {getByText} = render(<App />);

    const hitButton = getByText(/hit/i);
    fireEvent.click(hitButton);
    getByText(/b: 0/i);
    getByText(/s: 0/i);
  });

  it('should reset ball & strike to 0 after clicking ball 4 times', () => {
    const {getByText} = render(<App />);

    const ballButton = getByText(/ball/i);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    fireEvent.click(ballButton);
    getByText(/b: 0/i);
    getByText(/s: 0/i);
  });

  it('should reset ball & strike to 0 after clicking strike 3 times', () => {
    const {getByText} = render(<App />);

    const strikeButton = getByText(/strike/i);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);
    fireEvent.click(strikeButton);

    getByText(/b: 0/i);
    getByText(/s: 0/i);
  });

  it('should reset strike to 0 after 2 fouls and 1 strike', () => {
    const {getByText} = render(<App />);

    const strikeButton = getByText(/strike/i);
    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);
    fireEvent.click(foulButton);

    fireEvent.click(strikeButton);

    getByText(/s: 0/i);
  });

  it('should set strike to 2 after 1 fouls and 1 strike', () => {
    const {getByText} = render(<App />);

    const strikeButton = getByText(/strike/i);
    const foulButton = getByText(/foul/i);
    fireEvent.click(foulButton);

    fireEvent.click(strikeButton);

    getByText(/s: 2/i);
  });
});
