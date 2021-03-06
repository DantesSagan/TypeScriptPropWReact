import { useReducer } from 'react';

const initialState = { count: 0 };

type CounterProps = {
  count: number;
};

type UpdateAction = {
  type: 'increment' | 'decrement' | 'reset';
  payload: number;
};

type ResetAction = {
  type: 'reset';
};

type CounterAction = UpdateAction | ResetAction;

function reducer(state: CounterProps, action: CounterAction) {
  switch (action.type) {
    case 'increment':
      return { count: state.count + action.payload };
    case 'decrement':
      return { count: state.count - action.payload };
    case 'reset':
      return initialState
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
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
      >
        Decrement - 10
      </button>
      <br />
      <button
        onClick={() => dispatch({ type: 'reset' })}
        className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
      >
        Reset
      </button>
    </>
  );
}
