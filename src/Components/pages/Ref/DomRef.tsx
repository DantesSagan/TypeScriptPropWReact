import { useEffect, useRef } from 'react';

export default function DomRef() {
  const inputRef = useRef<HTMLInputElement>(null!);
  useEffect(() => {
    inputRef.current.focus();
  }, []);
  return (
    <div>
      <input 
      className='p-4 shadow-inner text-black'
      type='text' ref={inputRef} />
    </div>
  );
}
