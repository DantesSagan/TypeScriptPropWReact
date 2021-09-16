import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Counter from './pages/PropsUseReducerHook/Counter';

export default function UseReducerHook() {
  const Component = () => {
    const codeString = `
import Counter from './pages/PropsUseReducerHook/Counter';

export default function UseReducerHook() {
};
  return (
    <div>
      <div>
        <Counter />
      </div>
      <Component />
    </div>
  );
}

.
.
.
.
=>
.
.
.
// We are using Component Counter that creating in tsx
// But instead of using as usual jsx counter we are using in this case
// Type CounterProps and type CounterAction that need for better validation 
// Where in this case we using useReducer for multiple state's managment 
// When type it is a string and a payload it is a number
import { useReducer } from 'react';

const initialState = { count: 0 };

type CounterProps = {
  count: number;
};

type CounterAction = {
  type: string;
  payload: number;
};

function reducer(state: CounterProps, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return { count: action.payload };
    default:
      return state;
  }
}

export default function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      Count: {state.count}
      <br />
      <button
        onClick={() => dispatch({ type: 'increment', payload: 10 })}
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
      >
        Increment - 10
      </button>
      <br />
      <button
        onClick={() => dispatch({ type: 'decrement', payload: 10 })}
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
      >
        Decrement - 10
      </button>
      <br />
      <button
        onClick={() => dispatch({ type: 'reset', payload: 0 })}
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
      >
        Reset
      </button>
    </>
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
    window.scrollTo({ top: 900, behavior: 'smooth' });
  };

  return (
    <div>
      {' '}
      <h2 className='text-center text-4xl p-4'>
        This is a TypeScript page with how to use AdvancedProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with three kind of props = Heading, Status, Oscar!
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
        <Counter />
      </div>
      <Component />
    </div>
  );
}
