import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import CustomComponent from './pages/HTMLEmelent/CustomComponent';

export default function ExtractingAComponentsPropTypes() {
  const Component = () => {
    const codeString = `
import CustomComponent from './pages/HTMLEmelent/CustomComponent';

export default function ExtractingAComponentsPropTypes() {
      return (
    <div>
         <CustomComponent
          name='Alexsander Mikh'
          messageCount={10}
          isLoggedIn={true}
        />
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
// And we extracting this type GreetProps from Greet2 
// Which contains:
// name: string;
//  messageCount?: number;
// isLoggedIn: boolean;


import React from 'react';
import Greet2 from '../Greet2';

//We can specified React.ComponentProps
// And within angle brackets we typeof Greet2
// And in jsx if we write props there will be auto suggestion the same props as the Gree2 Component
// If u do across this situation u might know how to handle it

export default function CustomComponent(
  props: React.ComponentProps<typeof Greet2>
) {
  return (
    <div>
      <h1 className='text-3xl'>Hello wonderful!</h1>
      {props.name}
      <br />
      <p>
        You have {\` \`}
        <span className='underline'>{props.messageCount}</span> {\` \`}
        unread message.
      </p>
      <br />
      // isLoggedIn doesn't show login because we aren't loggednIn :D
      {props.isLoggedIn}
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
        This is a TypeScript page with how to use
        ExtractingAComponentsPropsTypes!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with extracting typeof from another file with types and using multiple
        way!
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
        <CustomComponent
          name='Alexsander Mikh'
          messageCount={10}
          isLoggedIn={true}
        />
      </div>
      <Component />
    </div>
  );
}
