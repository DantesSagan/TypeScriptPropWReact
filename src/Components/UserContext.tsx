import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { UserContextProvider } from './pages/Context/AuthUser';
import User from './pages/Context/User';

export default function UserContext() {
  const Component = () => {
    const codeString = `
import { UserContextProvider } from './pages/Context/AuthUser';
import User from './pages/PropsUseStateHook/User';

export default function UserContext() {
    const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };
  return (
    <div>
        <UserContextProvider>
          <User />
        </UserContextProvider>
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
// We are using Component AuthUser for use several type's of UserContextType 
// And using useContext we declare user name and email for the future value's that can be uses
// Or we can use {} as UserContextType instead  <UserContextType | null>(null)
// For better and easier working with this createContext
import { useState, createContext } from 'react';

export type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProviderProps = {
  children: React.ReactNode;
};

export const UserContext = createContext({} as UserContextType);

export const UserContextProvider = ({ children }: UserContextProviderProps) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};

.
.
.
=>
.
.
.
// We are using Component User with useContext for handleLogin and handleLogout
// And then we are using userContext - parameter - that we uses for declaring this parameter
// Or we can use {} as UserContextType instead this optional chaining for better easy working
import { useContext } from 'react';
import { UserContext } from './AuthUser';

export default function User() {
  const userContext = useContext(UserContext);
  const handleLogin = () => {
      userContext.setUser({
        name: 'DantesSagan',
        email: 'WhateverEmail@gmail.com',
      });
  };
  const handleLogout = () => {
      userContext.setUser(null);
  };
  return (
    <div>
      <div className='border border-blue-700 p-4 font-bold m-2'>
        User name is - {userContext.user?.name}
      </div>
      <div className='border border-blue-700 p-4 font-bold m-2'>
        User email is - {userContext.user?.email}
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
        This is a TypeScript page with how to use useContextFutureValue on
        UserContext!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        UserContext FutureValue!
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
        <UserContextProvider>
          <User />
        </UserContextProvider>
      </div>
      <Component />
    </div>
  );
}
