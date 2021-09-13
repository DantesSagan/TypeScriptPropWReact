import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Heading from './pages/AdvancedProps/Heading';
import Oscar from './pages/AdvancedProps/Oscar';
import Status from './pages/AdvancedProps/Status';
import Greet2 from './pages/Greet2';

export default function AdvancedProps() {
  const Component = () => {
    const codeString = `
import Heading from './pages/AdvancedProps/Heading';
import Oscar from './pages/AdvancedProps/Oscar';
import Status from './pages/AdvancedProps/Status';
import Greet2 from './pages/Greet2';

export default function AdvancedProps() {
    return (
    <div>
      <Status status='loading' />
      <Heading>Placeholder text</Heading>
      <Oscar>
        <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
      </Oscar>
      <Greet2 name='DantesSagan' isLoggedIn={false} />
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
// We are using Component Heading and taking HeadingProps

type HeadingProps = {
  children: string;
};

export default function Heading(props: HeadingProps) {
  return <h2>{props.children}</h2>;
}
.
.
.
=>
.
.
.
// We are using Component Oscar and taking  OscarProps

type OscarProps = {
  children: React.ReactNode;
};

export default function Oscar(props: OscarProps) {
  return <div>{props.children}</div>;
}
.
.
.
=>
.
.
.
// We are using Component Status and taking StatusProps
// And there is using three type props: loading, succes, error
type StatusProps = {
  status: 'loading' | 'succes' | 'error';
};

export default function Status(props: StatusProps) {
  let message;
  if (props.status === 'loading') {
    message = 'Loading...';
  } else if ((props.status = 'succes')) {
    message = 'Data fetched successfully!';
  } else if ((props.status === 'error!')) {
    message = 'Error fetching data';
  }
  return (
    <div>
      <h2>Status - {message}</h2>
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
        <Status status='loading' />
        <br />
        <Heading>Placeholder text</Heading>
        <br />
        <Oscar>
          <Heading>Oscar goes to Leonardo DiCaprio!</Heading>
        </Oscar>
        <br />
        <Greet2 name='DantesSagan' isLoggedIn={false} />
        <br />
      </div>
      <Component />
    </div>
  );
}
