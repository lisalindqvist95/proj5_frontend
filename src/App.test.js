import { render, screen } from '@testing-library/react';
import App from './App';

/** CREDIT: Adapted from the Code Institute Moments Tutorial Project
 * https://github.com/Code-Institute-Solutions/moments/
*/

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
