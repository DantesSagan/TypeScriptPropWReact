import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Greet from './pages/Greet';

export default function Props() {
  const Component = () => {
    const codeString = `

import Greet from './pages/Greet';

export default function Props() {
 return (
    <div className=''>
        <Greet name='DantesSagan' />
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
  // We take Gree function and using like declare props GreetProps
  // When we write name: string we take name='DantesSagan'

  type GreetProps = {
  name: string;
};

export default function Greet(props: GreetProps) {
  return (
    <div>
      <h2>Welcome {props.name}! You have 10 unread messages!</h2>
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
  const Puzzle = true
    ? [false ? 'free' : true ? 'code' : 'camp']
    : false
    ? 'courses'
    : 'joke answer';
  console.log(Puzzle);

  return (
    <div className=''>
      <h2 className='text-center text-4xl p-4'>
        This is a TypeScript page with how to use TypingProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with Props - GreetProps!
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
        <Greet name='DantesSagan' />
      </div>
      <Component />
    </div>
  );
}
