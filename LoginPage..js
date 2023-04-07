import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, Navigate } from 'react-router-dom';
import './App.css';

const LoginPage = () => {
  const [loginStatus, setLoginStatus] = useState(false);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const userLogin = () => {
    setLoginStatus(true);
    console.log(`User ${username} logged in with password ${password}!`);
  };

  const updateUsername = (event) => {
    setUsername(event.target.value);
  };

  const updatePassword = (event) => {
    setPassword(event.target.value);
  };

  if (loginStatus) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div>
      <h1>Login Page</h1>
      <label>
        Username:
        <input type="text" value={username} onChange={updateUsername} />
      </label>
      <br />
      <label>
        Password:
        <input type="password" value={password} onChange={updatePassword} />
      </label>
      <br />
      <button onClick={userLogin}>Log In</button>
    </div>
  );
};

const DashboardPage = () => {
  return (
    <div>
      <h1>Dashboard Page</h1>
      <Link to="/">Log Out</Link>
    </div>
  );
};

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/">
          <LoginPage />
        </Route>
        <Route path="/dashboard">
          <DashboardPage />
        </Route>
      </Routes>
    </Router>
  );
};

export default App;
