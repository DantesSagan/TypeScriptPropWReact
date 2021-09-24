import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { dark } from 'react-syntax-highlighter/dist/esm/styles/prism';

import List from './pages/Generic/List';

export default function GenericProp() {
  const Component = () => {
    const codeString = `
import List from './pages/Generic/List';

export default function GenericProp() {
  return (
    <div>
        <List
          items={['Batman', 'Superman', 'Wonder Woman']}
          onClick={(item) => console.log(item)}
        />
        <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />

        {/* 
      We adding from mapping div where using key={index.id} and add to this Component of List
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            second: 'Wayne',
          },
          {
            id:2,
            first: 'Clark',
            second: 'Kent',
          },
          {
            id:3,
            first: 'Princess',
            second: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)}
      /> 
      And this is way to use Generic Props using number of id what improve powerful of Props
      */}
        <List
          items={[
            {
              first: 'Bruce',
              second: 'Wayne',
            },
            {
              first: 'Clark',
              second: 'Kent',
            },
            {
              first: 'Princess',
              second: 'Diana',
            },
          ]}
          onClick={(item) => console.log(item)}
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
// We are using Component List what specified multiple way of using GenericProp

type ListProps<Type> = {
  // We can use items: string[] | number[]
  // But instead of typing this methods we can use Generig Props
  // That called and named whatever you want
  items: Type[];
  onClick: (value: Type) => void;
};
// Adding Type extends join all type of props what you wanted
// But if you want use just String or Number we can use this code:
// <Type extends string | number >
// Or all type props like below

export default function List<Type extends {}>({
  // Additionally we can use TypeProp by - id:
  // So <Type extends {id: number} by number or string
  // And we changing key value of map method
  items,
  onClick,
}: ListProps<Type>) {
  return (
    <div>
      <h2>List of items</h2>
      {items.map((item, index) => {
        return (
          // Here we change index key to key={index.id}
          // And specified of GenericProp.tsx adding to object value id in number
          <div key={index} onClick={() => onClick(item)}>
            {item}
          </div>
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
        This is a TypeScript page with how to use GenericProps!
      </h2>
      <hr className='border-2 border-blue-700' />
      <h2 className='text-center text-3xl p-4'>
        This is example code to explain and show how to work TypeScript <br />{' '}
        with using GenericProp what can be used multiple way in adding string[]
        | number{} |
        {/* <WhateverNameOfProp> like <TypeProp> | <T> | <Prop> whatever you like*/}
        for improving powerful and flexibility GenericProps!
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
        <List
          items={['Batman', 'Superman', 'Wonder Woman']}
          onClick={(item) => console.log(item)}
        />
        <div>
          Click number. And watch  console.log 
          <List items={[1, 2, 3]} onClick={(item) => console.log(item)} />
        </div>

        {/* 
      We adding from mapping div where using key={index.id} and add to this Component of List
      <List
        items={[
          {
            id: 1,
            first: 'Bruce',
            second: 'Wayne',
          },
          {
            id:2,
            first: 'Clark',
            second: 'Kent',
          },
          {
            id:3,
            first: 'Princess',
            second: 'Diana',
          },
        ]}
        onClick={(item) => console.log(item)}
      /> 
      And this is way to use Generic Props using number of id what improve powerful of Props
      */}

        {/* <List
          items={[
            {
              first: 'Bruce',
              second: 'Wayne',
            },
            {
              first: 'Clark',
              second: 'Kent',
            },
            {
              first: 'Princess',
              second: 'Diana',
            },
          ]}
          onClick={(item) => console.log(item)}
        /> */}
      </div>
      <Component />
    </div>
  );
}
