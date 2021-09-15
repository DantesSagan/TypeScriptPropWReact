import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Container from './pages/StyleProps/Container';

export default function StyleProps() {
  const Component = () => {
    const codeString = ` 
import Container from './pages/StyleProps/Container';

export default function StyleProps() {
  return (
    <div>
      <Container styles={{ border: '1px solid black', padding: '1rem' }} />
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
// We are going to use Container component which contains 
// Text contant what we are changing from StyleProps 
import React from 'react';

type ContainerProps = {
  styles: React.CSSProperties;
};

export default function Container(props: ContainerProps) {
  return (
    <div style={props.styles}>
      Text content goes here 
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
        This is a TypeScript page with how to use StyleProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with StyleProps what changing styles of our text content from Component
        - StyleProps.tsx!
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
        <Container
          styles={{
            border: '1px solid white',
            borderRadius: '15px',
            padding: '1rem',
            fontStyle: 'italic',
          }}
        />
      </div>
      <Component />
    </div>
  );
}
