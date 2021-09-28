import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { useState } from 'react';
import RandomNumber from './pages/Restriction/RandomNumber';

export default function RestrictingProps() {
  const [state, setState] = useState(0);

  const ScrollDown = () => {
    window.scrollTo({ top: 800, behavior: 'smooth' });
  };

  const Component = () => {
    const codeString = `
// We are using Component RestrictingProps what uses for restrict in this example numbers
// What are setting by counter 
// Where display showing numbers in boolean state

import { useState } from 'react';
import RandomNumber from './pages/Restriction/RandomNumber';

export default function RestrictingProps() {
  const [state, setState] = useState(0);
  return (
    <div>
        {state > 0 ? (
          <RandomNumber value={state} isPositive />
        ) : state < 0 ? (
          <RandomNumber value={state} isNegative />
        ) : state === 0 ? (
          <RandomNumber value={state} isZero />
        ) : (
          state
        )}
        <button
          className='p-4 bg-blue-500 rounded-lg text-white'
          onClick={() => setState(state + 1)}
        >
          +
        </button>
        <button
          className='p-4 bg-blue-500 rounded-lg text-white'
          onClick={() => setState(state - 1)}
        >
          -
        </button>
        <button
          className='p-4 bg-blue-500 rounded-lg text-white'
          onClick={() => setState(0)}
        >
          0
        </button>
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
// And we are using Component RandomNumber
// What are uses for setting boolean expression of our number
// Using Separated types of Props with chaining operator
// And RandomNumberProps with three type of Number with | logical operator

type RandomNumberType = {
  value: number;
};
type PositiveNumber = RandomNumberType &{
  isPositive: boolean;
  isNegative?: never;
  isZero?: never;
};

type NegativeNumber = RandomNumberType & {
  isNegative: boolean;
  isPositive?: never;
  isZero?: never;
};

type Zero = RandomNumberType & {
  isZero: boolean;
  isPositive?: never;
  isNegative?: never;
};

type RandomNumberProps = PositiveNumber | NegativeNumber | Zero;

export default function RandomNumber({
  value,
  isPositive,
  isNegative,
  isZero,
}: RandomNumberProps) {
  return (
    <div>
      {value}
      {isPositive && \`positive\`}
      {isNegative && \`negative\`}
      {isZero && \`zero\`}
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
  return (
    <div>
      {' '}
      <h2 className='text-center text-4xl p-4'>
        This is a TypeScript page with how to use RestrictingProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with RestrictingProps what uses several type of Props what are using
        with boolean and the same time - ? - optional chaining operator!
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
        {state > 0 ? (
          <RandomNumber value={state} isPositive />
        ) : state < 0 ? (
          <RandomNumber value={state} isNegative />
        ) : state === 0 ? (
          <RandomNumber value={state} isZero />
        ) : (
          state
        )}
        <button
          className='p-4 bg-blue-500 hover:bg-blue-700 rounded-lg text-white m-2'
          onClick={() => setState(state + 1)}
        >
          +
        </button>
        <button
          className='p-4 bg-red-500 hover:bg-red-700 rounded-lg text-white m-2'
          onClick={() => setState(state - 1)}
        >
          -
        </button>
        <button
          className='p-4 bg-green-500 hover:bg-green-700 rounded-lg text-white m-2 '
          onClick={() => setState(0)}
        >
          0
        </button>
      </div>
      <Component />
    </div>
  );
}
