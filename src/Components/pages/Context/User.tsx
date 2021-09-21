import { useContext } from 'react';
import { UserContext } from './AuthUser';

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
    if (userContext) {
      userContext.setUser({
        name: 'DantesSagan',
        email: 'WhateverEmail@gmail.com',
      });
    }
  };
  const handleLogout = () => {
    if (userContext) {
      userContext.setUser(null);
    }
  };
  return (
    <div>
      <div className='border border-blue-700 p-4 font-bold m-2'>
        User name is - {userContext?.user?.name}
      </div>
      <div className='border border-blue-700 p-4 font-bold m-2'>
        User email is - {userContext?.user?.email}
      </div>
      <br />
      <button
        className='bg-blue-500 hover:bg-blue-700 p-4 font-mono rounded-2xl m-2'
        onClick={handleLogin}
      >
        Login
      </button>
      <button
        className='bg-red-500 hover:bg-red-700 p-4 font-mono rounded-2xl m-2'
        onClick={handleLogout}
      >
        Logout
      </button>
      <br />
    </div>
  );
}
