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
    className="p-4 rounded-lg m-4"
      type='text'
      value={props.value}
      onChange={handeInputChange}
    />
  );
}
