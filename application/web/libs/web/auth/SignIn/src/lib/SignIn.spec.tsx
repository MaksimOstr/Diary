import { render } from '@testing-library/react';

import SignIn from './ui-SignIn/SignIn';

describe('SignIn', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignIn />);
    expect(baseElement).toBeTruthy();
  });
});
