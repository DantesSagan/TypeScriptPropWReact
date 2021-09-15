import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

export default function PropsTypesNTips() {
  const Component = () => {
    const codeString = `
  export default function PropsTypesNTips() {
  };
  return (
    <div>
      <Component />
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
        // We are creating file called Person.types.ts and exporting Name 
        // from this file for flexible working with different types 
export type Name = {
  first: string;
  last: string;
};

export type PersonProps = {
  name: Name
};
.
.
.
=>
.
.
.
// And we are importing in PersonList  Name 

import { Name } from '../PropsTypesAndTips/Person.types';

type PersonListProps = {
  names: Name[];
};

export default function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.names.map((name) => {
        return (
          <h2 key={name.first}>
            {name.first}
            {name.last}
          </h2>
        );
      })}
    </div>
  );
}
// And the same in Person file

import { PersonProps } from "../PropsTypesAndTips/Person.types";

export default function Person(props: PersonProps) {
  return (
    <div>
      {props.name.first}
      {props.name.last}
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
    window.scrollTo({ top: 650, behavior: 'smooth' });
  };

  return (
    <div>
      <h2 className='text-center text-4xl p-4'>
        This is a TypeScript page with how to use PropsTypesAndTips!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with complex code for using Person.types.ts, creating Name type for
        flexible woring in PersonList.tsx and Person.tsx!
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
      <Component />
    </div>
  );
}
