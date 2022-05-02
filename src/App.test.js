import { render, screen } from '@testing-library/react';
import App from './App';
import { debug } from 'jest-preview';

it('should display main app when logged in and following text is displayed', () => {
  render(<App loggedInInit={true}/>);
  const h1 = screen.getByText(/Hey there/)
  expect(h1).toBeInTheDocument();
});

test('should display logout screen when logged out', () => {
  const mockLogin = () => <>This is expected text</>
  render(<App _Login={mockLogin}/>);
  const element = screen.getByText(/This is expected text/)
  expect(element).toBeInTheDocument()

});
