import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Person from './pages/BasicProps/Person';
import PersonList from './pages/BasicProps/PersonList';
import Greet2 from './pages/Greet2';

export default function BasicProps() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };

  const nameList = [
    {
      first: 'Bruce',
      last: 'Wayne',
    },
    {
      first: 'Clark',
      last: 'Kent',
    },
    {
      first: 'Princess',
      last: 'Diana',
    },
  ];

  const Component = () => {
    const codeString = `
import Person from './pages/BasicProps/Person';
import PersonList from './pages/BasicProps/PersonList';
import Greet2 from './pages/Greet2';

export default function BasicProps() {
  const personName = {
    first: 'Bruce',
    last: 'Wayne',
  };
  return (
    <div>
        <p>
          Greet 2 with messageCount and isLoggedIn showing "Welcome guest!"
          because we aren't loggedIn :D{' '}
        </p>
        <Greet2 name='DantesSagan' messageCount={20} isLoggedIn={false} />
        <br />
        <p>This is Person name personName = Bruce Wayne:</p>
        <Person name={personName} />
        <br />
        <p>And this is PersonListName with three PersonName: </p>
        <PersonList names={nameList} />
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
// Taking Component Greet2
type GreetProps = {
  name: string;
  messageCount: number;
  isLoggedIn: boolean;
};

export default function Greet2(props: GreetProps) {
  return (
    <div>
      <h2>
        {props.isLoggedIn
          ? \`Welcome $\{props.name}! You have $\{props.messageCount} unread messages\`
          : \`Welcome guest!\`}
      </h2>
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
// Taking Component Person for declaring PersonProps 
type PersonProps = {
  name: {
    first: string;
    last: string;
  };
};


export default function Person(props: PersonProps) {
    return (
      <div>
        {props.name.first}
        {props.name.last}
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
// And this is personList where we using map method for declaring first and last name 
type PersonListProps = {
  names: {
    first: string;
    last: string;
  }[];
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
        This is a TypeScript page with how to use TypingProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with Props - PersonProps!
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
        <p>
          <span className='font-bold'>Greet 2</span> with{' '}
          <span className='font-bold'>messageCount</span> and{' '}
          <span className='font-bold'>isLoggedIn </span>
          showing "Welcome guest!" because we aren't loggedIn :D{' '}
        </p>
        <Greet2 name='DantesSagan' messageCount={20} isLoggedIn={false} />
        <br />
        <p>
          This is <span className='font-bold'>Person </span>name{' '}
          <span className='font-bold'>personName</span> = Bruce Wayne:
        </p>
        <Person name={personName} />
        <br />
        <p>
          And this is <span className='font-bold'>PersonListName</span> with
          three PersonName:{' '}
        </p>
        <PersonList names={nameList} />
      </div>
      <Component />
    </div>
  );
}
