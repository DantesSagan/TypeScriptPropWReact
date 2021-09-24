import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { Counter } from './pages/Class/Counter';

export default function ClassComponent() {
  const Component = () => {
    const codeString = `
import { Counter } from './pages/Class/Counter';

export default function ClassComponent() {
  return (
    <div>
        <Counter message='Hello, the count value is - ' />
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
// And there we are using class Component for declaring Message and Count values
// With using typeProps for more improving more flexibility

import { Component } from 'react';

type NumberProps = {
  count: number;
};

type CounterProps = {
  message: string;
};

export class Counter extends Component<CounterProps, NumberProps> {
  state = {
    count: 0,
  };
  handeClick = () => {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
  };
  handeClickMinus = () => {
    this.setState((prevState) => ({
      count: prevState.count - 1,
    }));
  };
  handleReset = () => {
    this.setState(() => ({
      count: 0,
    }));
  };
  render() {
    return (
      <div>
        <div className='p-4 text-white font-bold'>
          {this.props.message}
          {this.state.count}
        </div>
        <button
          className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
          onClick={this.handeClick}
        >
          Inc
        </button>
        <button
          className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
          onClick={this.handeClickMinus}
        >
          Dec
        </button>
        <button
          className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
          onClick={this.handleReset}
        >
          Reset
        </button>
      </div>
    );
  }
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
        This is a TypeScript page with how to use class Component and typeProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with Class Component Counter with using propType state's for more
        flexibility in TypeScript!
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
        <Counter message='Hello, the count value is - ' />
      </div>
      <Component />
    </div>
  );
}
