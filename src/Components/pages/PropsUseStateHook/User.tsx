import { useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};
export default function User() {
  const [user, setUser] = useState<AuthUser | null>();

  const handleLogin = () => {
    setUser({
      name: 'DantesSagan',
      email: 'WhaterverEmail@gmail.com',
    });
  };

  const handleLogout = () => {
    setUser(null);
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
      {/* ? - this is optional chaining operator */}
      <div className='font-bold border border-white p-4 m-2 rounded-lg'>
        User name is - {user?.name}
      </div>
      <div className='font-bold border border-white p-4 m-2 rounded-lg'>
        User email is - {user?.email}
      </div>
    </div>
  );
}
