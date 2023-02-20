import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../App';

describe('',() =>{
  it('renders login page title', () => {
    render(<App />);
    
    const title = screen.getByText(/Minha Agenda/i);
    
    expect(title).toBeInTheDocument();
  });

  it('should render subtitle', () => {
    render(<App />);

    const subtitle = screen.getByText(/Faça seu Login/i);

    expect(subtitle).toBeInTheDocument();
  });

  it('should render email input', () => {
    render(<App />);

    const emailLabel = screen.getByText(/Email/i);
    const emailInput = screen.getByTestId('login_email');

    expect(emailLabel).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
  });

  it('should render password input', () => {
    render(<App />);

    const passwordLabel = screen.getByText(/Senha/i);
    const passwordInput = screen.getByTestId('login_password');

    expect(passwordLabel).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });
})
