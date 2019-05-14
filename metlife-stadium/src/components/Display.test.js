import React from 'react';
import {render} from 'react-testing-library';
import 'react-testing-library/cleanup-after-each';

import Display from './Display';

describe('<Display />', () => {
  it('should render successfully', () => {
    render(<Display />);
  });

  it('should render balls and strikes title', () => {
    const {getByText} = render(<Display />);

    getByText(/b:/i);
    getByText(/s:/i);
  });
});
