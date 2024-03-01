import { render } from '@testing-library/react';

import SignUp from './ui-SignUp/SignUp';

describe('SignUp', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<SignUp />);
    expect(baseElement).toBeTruthy();
  });
});
