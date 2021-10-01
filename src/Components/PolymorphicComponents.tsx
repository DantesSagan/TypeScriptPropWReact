import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import Text from './pages/Polymorphic/Text';

export default function PolymorphicComponents() {
  const Component = () => {
    const codeString = `
import Text from './pages/Polymorphic/Text';

export default function PolymorphicComponents() {
      return (
    <div>
    // Unfortunately I use TailwindCSS and where is h1 ,p and label doesn't work coz of Tailwind
    // And this we use Component Text where we declare as= like text element && size= like size of text
    // Lable will use color && htmlFor what declare ID and for this we used in previos Text Component general - E - tag for any ID what you needed
        <Text as='h1' size='lg'>
          Heading
        </Text>
        <Text as='p' size='md'>
          Paragraph
        </Text>
        <Text as='label' size='lg' color='secondary' htmlFor='someid'>
          Label
        </Text>
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
// And we are using Text Component what contains type TextOwnProps
// Where written other classNamend types what will be used in another Component
// And most importantly it used - E - general tag 
import React from 'react';

type TextOwnProps<E extends React.ElementType> = {
  size?: 'sm' | 'md' | 'lg';
  color?: 'primary' | 'secondary';
  children: React.ReactNode;
  as?: E;
};
    
type TextProps<E extends React.ElementType> = TextOwnProps<E> &
  Omit<React.ComponentProps<E>, keyof TextOwnProps<E>>;

export default function Text<E extends React.ElementType = 'div'>({
  size,
  color,
  children,
  as,
}: TextProps<E>) {
  const Component = as || 'div';
  return (
    <Component className={\`class-with-\${size}-\${color}\`}>{children}</Component>
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
        This is a TypeScript page with how to use PolymorphicComponents!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with general - E (ID) - tag!
        <br />
        This is typeProps advanced and this is not what you need in on regular
        basis.
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
        <Text as='h1' size='lg'>
          This is a <span className='underline'>"h1"</span> element ={' '}
          <span style={{ fontSize: '1.85em' }}>Heading</span>
        </Text>
        <Text as='p' size='md'>
          This is a <span className='underline'>"p"</span> element ={' '}
          <span style={{ fontSize: '1.0em' }}>Paragraph</span>
        </Text>
        <Text as='label' size='lg' color='secondary' htmlFor='someid'>
          This is a <span className='underline'>"label"</span> ={' '}
          <span style={{ fontSize: '1.0em' }}>Label</span>
        </Text>
      </div>
      <Component />
    </div>
  );
}
