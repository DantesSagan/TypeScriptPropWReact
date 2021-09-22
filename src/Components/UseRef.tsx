import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import DomRef from './pages/Ref/DomRef';
import MutableRef from './pages/Ref/MutableRef';

export default function UseRef() {
  const Component = () => {
    const codeString = `
import DomRef from './pages/Ref/DomRef';
import MutableRef from './pages/Ref/MutableRef';

export default function UseRef() {
  return (
    <div>
        <h1>First example</h1>
        <DomRef />
        <h1>Second example</h1>
        <MutableRef />
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
// We are using Component DomRef like 1st example with HTMLInputElement with using useRef

import { useEffect, useRef } from 'react';

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input type='text' ref={inputRef} />
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
// We are using Component MutableRef like 2nd example
// When we are creating simple Timer with useRef,useEffect,useState

import { useState, useEffect, useRef } from 'react';

export default function MutableRef() {
  const [timer, setTimer] = useState(0);
  // or we can change like this
  // const interValRef = useRef<number | null>(null);
  // and then we have to check only when call interValRef.current passing in the appropriate value
  // const stopTimer = () => {
  // if (interValRef.current) window.clearInterval(interValRef.current);
  //};
  const interValRef = useRef<number | undefined>(undefined);

  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };
  useEffect(() => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
    return () => {
      stopTimer();
    };
  }, []);
  return (
    <div>
      HookTimer - {timer} -
      <button onClick={() => stopTimer()}>StopTimer</button>
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
        This is a TypeScript page with how to use UseRef!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with two examples that uses useRef and other hooks for working in
        TypeScript!
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
        <h1 className='font-bold'>First example</h1>
        <br />
        <DomRef />
        <br />
        <h1 className='font-bold'>Second example</h1>
        <MutableRef />
      </div>
      <Component />
    </div>
  );
}
