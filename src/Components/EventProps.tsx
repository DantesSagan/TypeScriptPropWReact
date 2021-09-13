import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Button from './pages/EventProps/Button';
import Input from './pages/EventProps/Input';

export default function EventProps() {
  const Component = () => {
    const codeString = `
import Button from './pages/EventProps/Button';
import Input from './pages/EventProps/Input';

export default function EventProps() {
    return (
    <div>
      <Button
        handleClick={(event, id) => {
          console.log('Button clicked', event, id);
        }}
      />
      <Input
        value=''
        handleChange={(event) => {
          console.log(event);
        }}
      />
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
// We are taking Component Button with  ButtonComponent and also using handleClick with React.MouseEvent<HTMLButtonElement>
// Which mean we don't need to call HTMLButtonElement like in JSX

import React from 'react';

type ButonProps = {
  handleClick: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void;
};

export default function Button(props: ButonProps) {
  return (
      <button onClick={event => props.handleClick(event, 1)}></button>
  );
}
.
.
.
=>
.
.
.
// We are using Component Input with InputProps which contains value: string and handle Change with HTMLInputElement
// with props ;D
import React from 'react';

type InputProps = {
  value: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

export default function Input(props: InputProps) {

  const handeInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event);
  };
  return (
    <input
      type='text'
      value={props.value}
      onChange={handeInputChange}
    />
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
        <Button
          handleClick={(event, id) => {
            console.log('Button clicked', event, id);
          }}
        />
        <br />
        <Input
          value=''
          handleChange={(event) => {
            console.log(event);
          }}
        />
      </div>
      <Component />
    </div>
  );
}
