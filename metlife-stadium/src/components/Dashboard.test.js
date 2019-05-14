import React from 'react';
import {render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';
import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should render successfully', () => {
    render(<Dashboard />);
  });

  it('should render ball buttons successfully', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/ball/i);
  });

  it('should render strike buttons successfully', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/strike/i);
  });

  it('should render foul buttons successfully', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/foul/i);
  });

  it('should render hit buttons successfully', () => {
    const {getByText} = render(<Dashboard />);
    getByText(/hit/i);
  });
});
