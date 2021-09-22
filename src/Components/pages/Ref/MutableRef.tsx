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

  const startTimer = () => {
    interValRef.current = window.setInterval(() => {
      setTimer((timer) => timer + 1);
    }, 1000);
  };
  const stopTimer = () => {
    window.clearInterval(interValRef.current);
  };
  const clearTimer = () => {
    setTimer(0);
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
        <br />
      <p className='text-3xl border border-white p-4 m-2'>
        HookTimer <br />
        <span className=''>{timer}</span>
      </p>
      <br />
      <button
        className='m-2 py-2 px-4 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none'
        onClick={() => startTimer()}
      >
        Start Timer
      </button>
      <br />
      <button
        className='m-2 py-2 px-4 bg-red-500 text-white font-semibold rounded-lg shadow-md hover:bg-red-700 focus:outline-none'
        onClick={() => stopTimer()}
      >
        Stop Timer
      </button>
      <br />
      <button
        className='m-2 py-2 px-4 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 focus:outline-none'
        onClick={() => clearTimer()}
      >
        Clear Timer
      </button>
    </div>
  );
}
