import { useState } from 'react';

export default function LoggedIn() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  const handleLogout = () => {
    setIsLoggedIn(false);
  };
  return (
    <div>
      <button
        onClick={handleLogin}
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
      >
        Login
      </button>
      <button
        onClick={handleLogout}
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
      >
        LogOut
      </button>
      <div className='font-bold border border-white p-4 rounded-lg'>
        User is {isLoggedIn ? 'logged in' : 'logged out'}
      </div>
    </div>
  );
}
