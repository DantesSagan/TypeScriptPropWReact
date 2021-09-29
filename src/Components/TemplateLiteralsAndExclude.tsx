import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Toast from './pages/TemplateLiteralsAndExclude/Toast';

export default function TemplateLiteralsAndExclude() {
  const Component = () => {
    const codeString = `
import Toast from './pages/TemplateLiteralsAndExclude/Toast';

export default function TemplateLiteralsAndExclude() {
      return (
    <div>
        <Toast position='center - bottom' />
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
// We are using component Toast with type Props like a several declarable string's
// What will be combined in ToastProps like in position property Wrapping two position 'Horizontal' and 'Vertical' 
// And 'Exclude' two position 'center-center to declaring this in tsx like an a object Toasts notification - {position}

type HorizontalPosition = 'left' | 'center' | 'right';
type VerticalPosition = 'top' | 'center' | 'bottom';
type ToastProps = {
  position:
    | Exclude<\`\${HorizontalPosition} - \${VerticalPosition}\`, 'center - center'>
    | 'center';
};
export default function Toast({ position }: ToastProps) {
  return <div>Toasts notification - {position} </div>;
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
        This is a TypeScript page with how to use ExcludeProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with type Props what concatenate two position Horizontal and Vertical to
        type ToastsProps what Exclude position that do not needede in this case!
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
        <Toast position='center - bottom' />
      </div>
      <Component />
    </div>
  );
}
