import React, { useState } from 'react';
import './App.global.css';
import LoginForm from './components/LoginForm';

export default function App() {
  const [user, setUser] = useState({ name: '', email: '' });
  const [error, setError] = useState('');

  const adminUser = {
    email: 'admin@admin.com',
    password: 'admin',
  };

  const Login = (details: any) => {
    console.log(details);

    if (
      details.email == adminUser.email &&
      details.password == adminUser.password
    ) {
      console.log('Logged in');
      setUser({
        name: details.name,
        email: details.email,
      });
    } else {
      console.log('Details do not match!!!');
      setError('Details do not match!!!');
    }
  };

  const Logout = () => {
    console.log('Logout');
    setUser({ name: '', email: '' });
  };
  return (
    <div className="App">
      {user.email != '' ? (
        <div className="welcome">
          <h2>
            Welcome, <span>{user.name}</span>
          </h2>
          <button onClick={Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm error={error} Login={Login} />
      )}
    </div>
  );
}
