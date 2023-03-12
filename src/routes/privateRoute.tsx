import { BrowserRouter as Router, Route, Routes, Navigate, Outlet } from "react-router-dom";

const isAuthenticated = () => localStorage.getItem('token');

export type ProtectedRouteProps = {
    children: JSX.Element;
  };

  export const PrivateOutlet: React.FC = ({ children }: any) => {
    return localStorage.getItem('agenda::token') ? (
      <>
        {children}
        <Outlet /> 
      </>
    ) : (
      <Navigate to="/" replace />
    );
  };