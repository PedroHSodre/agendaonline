import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';
import Login from '../pages/Login';
import { ThemeProvider } from 'styled-components';
import theme from '../styles/theme';

const mockedUsedNavigate = jest.fn();

jest.mock('react-router-dom', () => ({
   ...jest.requireActual('react-router-dom') as any,
  useNavigate: () => mockedUsedNavigate,
}));

describe('Login tests',() =>{
  it('renders login page title', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );
    
    const title = screen.getByText(/Minha Agenda/i);
    
    expect(title).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const subtitle = screen.getByText(/Faça seu Login/i);

    expect(subtitle).toBeInTheDocument();
  });

  it('should render email input', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const emailLabel = screen.getByText(/Email/i);
    const emailInput = screen.getByTestId('login_email');

    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('should render password input', () => {
    render(
      <ThemeProvider theme={theme}>
        <Login />
      </ThemeProvider>
    );

    const passwordLabel = screen.getByText(/Senha/i);
    const passwordInput = screen.getByTestId('login_password');

    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
})
