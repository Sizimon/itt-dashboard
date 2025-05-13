import React, {use, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import UserDashboard from './pages/UserDashboard';
import Login from './pages/Login';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  console.log(isAuthenticated);

  return (
    <Router>
      <Routes> 
        <Route 
          path="/register" 
          element={<Register 
            isAuthenticated={isAuthenticated} 
            setIsAuthenticated={setIsAuthenticated} 
          />}
        />
        <Route 
          path="/login" 
          element={<Login
            isAuthenticated={isAuthenticated}
            setIsAuthenticated={setIsAuthenticated} 
          />}
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
    </Router>
  );
}

export default App;
