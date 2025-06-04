import React, { useEffect, useState} from 'react';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import { useAuth } from './context/AuthProvider';

import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  const { isAuthenticated, setIsAuthenticated } = useAuth();
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
      if (isAuthenticated) {
        localStorage.setItem('isAuthenticated', 'true');
      } else {
        localStorage.setItem('isAuthenticated', 'false');
      }
  }, [isAuthenticated]);

  return (
    <BrowserRouter basename="/itt-dashboard">
      <Routes> 
        <Route 
          path="/register" 
          element={<Register />}
        />
        <Route 
          path="/login" 
          element={<Login />}
        />
        <Route 
          path="/user-dashboard" 
          element={isAuthenticated ? <UserDashboard /> : <Navigate to="/login" />}
        />
        <Route 
        path="/" 
        element={isAuthenticated ? <Navigate to="/user-dashboard"/> : <Navigate to="/register" />} 
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
