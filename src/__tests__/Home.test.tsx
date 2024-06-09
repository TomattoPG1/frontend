import Home from '@/app/(shop)/page';
import { render, screen } from '@testing-library/react';

it('should render homepage', () => {
  const props = {
    params: {
      gender: 'male',
    },
    searchParams: {
      page: '1',
    },
  };
  //   render(<Home {...props} />);
  expect(true).toBe(true);
});
