import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import LoggedIn from './pages/PropsUseStateHook/LoggedIn';
import User from './pages/PropsUseStateHook/User';

export default function UseStateHook() {
  const Component = () => {
    const codeString = `
import LoggedIn from './pages/PropsUseStateHook/LoggedIn';
import User from './pages/PropsUseStateHook/User';

export default function UseStateHook() {
};
  return (
    <div>
      <LoggedIn />
      <User />
    </div>
  );
}
.
.
.
=>
.
.
.
// We are using LoggedIn Component 
// What contains useState hook that changing state LogIn and LogOut

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
      <div>User is {isLoggedIn ? 'logged in' : 'logged out'}</div>
    </div>
  );
}
.
.
.
=>
.
.
.
// We are using User Component what contains also useState hook with little bit difference 
// In this difference we specify Type of User can be AuthUser or null 
// Where the initialValue is - null - neither in the future will be AuthUser
// And we are going to use chain operator - ? - because User can be null 
// If use exist access the name property 
// U have to check if the object exists before accessing the property 

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
      <div>User name is - {user?.name}</div>
      <div>User email is - {user?.email}</div>
    </div>
  );
}

        `;
    return (
      <SyntaxHighlighter language='javascript' style={dark}>
        {codeString}
      </SyntaxHighlighter>
    );
  };

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>
        This is a TypeScript page with how to use AdvancedProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with LoggendIn, User examples what improve work useState - Hook and at
        the same time - ? - optional chaining operator!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        And{' '}
        <i
          onClick={ScrollDown}
          className='italic 
          py-1 px-2
          text-white rounded-lg shadow-md
          bg-blue-500 
          hover:bg-blue-700 focus:outline-none '
          style={{ cursor: 'pointer' }}
        >
          example
        </i>{' '}
        below how it code works!
      </h2>
      <div
        className='list-outside text-center text-2xl rounded-lg p-8 border-4 border-blue-700 shadow-inner'
        style={{
          color: 'white',
          backgroundColor: '#4d4033',
        }}
      >
        <LoggedIn />
        <br />
        <User />
      </div>
      <Component />
    </div>
  );
}
