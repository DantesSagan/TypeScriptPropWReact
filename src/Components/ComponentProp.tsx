import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Private from './pages/AuthCompProp/Private';
import Profile from './pages/AuthCompProp/Profile';

export default function ComponentProp() {
  const Component = () => {
    const codeString = `
import Private from './pages/AuthCompProp/Private';
import Profile from './pages/AuthCompProp/Profile';

export default function ComponentProp() {
      return (
    <div>
        <Private isLoggedIn={true} component={Profile} />
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
// We are using component Profile which contains isLoggenIn boolean prop that switching
// One to another by default Component else {Login}
// And in this case we specified Component prop with ProfileProp

import React from 'react';
import { Login } from './Login';
import { ProfileProp } from './Profile';

type PrivateProps = {
  isLoggedIn: boolean;
  component: React.ComponentType<ProfileProp>;
};

export default function Private({
  isLoggedIn,
  component: Component,
}: PrivateProps) {
  if (isLoggedIn) {
    return <Component name='DangesSagan' />;
  } else {
    return <Login />;
  }
}
.
.
.
=>
.
.
.
// And we are taking two component that contains two different TSX value

export const Login = () => {
  return <div>Please Login to continue</div>;
};
export type ProfileProp = {
  name: string;
};

export default function Profile(prop: ProfileProp) {
  return <div>Private Profile Component. Name is - {prop.name} </div>;
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
      {' '}
      <h2 className='text-center text-4xl p-4'>
        This is a TypeScript page with how to use ComponentProp!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with LoggendIn and ComponentProp that contains ProfileProp in this case!
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
        <Private isLoggedIn={true} component={Profile} />
      </div>
      <Component />
    </div>
  );
}
