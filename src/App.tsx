import React, {use, useEffect, useState} from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Register from './pages/Register';

const App: React.FC = () => {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  return (
    <Router>
      <Routes> 
        <Route 
          path="/register" 
          element={<Register />}
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
