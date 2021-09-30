import React from 'react';

type InputProps = React.ComponentProps<'input'>;

export default function Input(props: InputProps) {
  return <input type='text' {...props} />;
}
