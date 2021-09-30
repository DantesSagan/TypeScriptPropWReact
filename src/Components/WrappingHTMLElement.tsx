import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Button from './pages/HTMLEmelent/Button';
import Input from './pages/HTMLEmelent/Input';

export default function WrappingHTMLElement() {
  const Component = () => {
    const codeString = `
import Button from './pages/HTMLEmelent/Button';

export default function WrappingHTMLElement() {
  return (
    <div>
        <Button
          variant='primary'
          onClick={() => console.log('DID YOU CLICKED ME?!?!??!? хахахахаахах')}
        >
          {/* 1st  we can use <div>Primary Button</div>
            2nd we can use just Primary Button without jsx element        
        */}
          Primary Button
        </Button>
        <Input />
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
// We are using Component Button with typeProps & <Omit React.Component<button>, 'children'>
// What can be use with jsx element of React Component and without it

type ButtonProps = {
  variant: 'primary' | 'secondary';
  children: string;
} & Omit<React.ComponentProps<'button'>, 'children'>;
// We can use simply React.ComponentProps<'button'>
// And in WrappingHTMLElement we use:
// <div>Primary Button</div>
//  Or we can use without React element like this:
// Omit<React.ComponentProps<'button'>, 'children'>
// Where don't needed write jsx element of React.ComponentProps
export default function Button({ variant, children, ...rest }: ButtonProps) {
  return (
    <button className={\`class-with-\${variant}\`} {...rest}>
      {children}
    </button>
  );
}
// And we are using Input Component with React.ComponentProps<'Input'>
// With jsx and without it 

import React from 'react';

type InputProps = React.ComponentProps<'input'>;

export default function Input(props: InputProps) {
  return <input {...props} />;
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
        This is a TypeScript page with how to use Wrap Html Element!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with WrappingHTMLElement what works with React Component and without it.
        <br />
        Examples on button and input elements.
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
        <span className='mt-2 p-4 bg-blue-500 hover:bg-blue-700 rounded-lg'>
          <Button
            variant='primary'
            onClick={() =>
              console.log('DID YOU CLICKED ME?!?!??!? хахахахаахах')
            }
          >
            {/* 1st  we can use <div>Primary Button</div>
            2nd we can use just Primary Button without jsx element        
        */}
            Primary Button
          </Button>
        </span>
        <br />
        <div className="m-4">
          And
          <br />
          <span className='m-2 p-4 text-black'>
            <Input />
          </span>
        </div>
      </div>
      <Component />
    </div>
  );
}
