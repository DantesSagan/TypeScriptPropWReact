import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import { ThemeContextProvider } from './pages/Context/ThemeContext';
import Box from './pages/Context/Box';

export default function UseContextHook() {
  const Component = () => {
    const codeString = `
import { ThemeContextProvider } from './pages/Context/ThemeContext';
import Box from './pages/Context/Box';

export default function UseContextHook() {
  return (
    <div>
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
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
// We are using Component ThemeContext where we provide ThemeContext with a value={theme}
// And using type ThemeContextProviderProps for childern value

import { createContext } from 'react';
import { theme } from './theme';

type ThemeContextProviderProps = {
  children: React.ReactNode;
};

export const ThemeContext = createContext(theme);

export const ThemeContextProvider = ({
  children,
}: ThemeContextProviderProps) => {
  return (
    <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>
  );
};
.
.
.
=>
.
.
.
// Where in Component Box we are using div container with style's value's from theme.ts 
// With two different palette color's
import { useContext } from 'react';
import { ThemeContext } from './ThemeContext';

export default function Box() {
  const theme = useContext(ThemeContext);
  return (
    <div
      style={{ backgroundColor: theme.primary.main, color: theme.primary.text }}
    >
      Theme context
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
// And this is export const theme where we have two palette that uses in previus Component 
// With useing useContext
export const theme = {
  primary: {
    main: '#3f51b5',
    text: '#fff',
  },
  secondary: {
    main: '#f50057',
    text: '#fff',
  },
};

        
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
        This is a TypeScript page with how to use useContextHooks!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with useContextHook that uses for install setting palette from theme
        like in Tailwind!
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
        <ThemeContextProvider>
          <Box />
        </ThemeContextProvider>
      </div>
      <Component />
    </div>
  );
}
