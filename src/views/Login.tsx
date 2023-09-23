import React from 'react';
import logo from '../resources/logo.png';
import './Login.css';

function Login() {
  return (
    <div className="h-screen flex">
      <div className="w-1/3">
        <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <img
              className="mx-auto h-10 w-auto"
              src={logo}
              alt="Pedra Moura"
            />
          </div>
        </div>
      </div>
      <div id="barbecue-bg" className="w-2/3" />
    </div>
  );
}

export default Login;
