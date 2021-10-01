import React from 'react';
import Greet2 from '../Greet2';

//We can specified React.ComponentProps
// And within angle brackets we typeof Greet2
// And in jsx if we write props there will be auto suggestion the same props as the Gree2 Component
// If u do across this situation u might know how to handle it

export default function CustomComponent(
  props: React.ComponentProps<typeof Greet2>
) {
  return (
    <div>
      <h1 className='text-3xl'>Hello wonderful!</h1>
      {props.name}
      <br />
      <p>
        You have {` `}
        <span className='underline'>{props.messageCount}</span> {` `}
        unread message.
      </p>
      {props.isLoggedIn}
    </div>
  );
}
