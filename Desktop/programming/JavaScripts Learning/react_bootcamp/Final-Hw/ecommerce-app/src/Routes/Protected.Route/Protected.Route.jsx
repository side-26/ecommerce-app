import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';

const ProtetedRoute = () => {
  return JSON.parse(localStorage.getItem("IsRegister")) ? (
    <Navigate to="/" />
  ) : (
    <Outlet />
  );
};
export default ProtetedRoute;
