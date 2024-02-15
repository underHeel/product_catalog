import React from 'react';

type MyComponentProps = {
  name: string;
};

const num = null;

if (num === undefined) {
  // eslint-disable-next-line no-console
  console.log('123');
}

const MyComponent: React.FC<MyComponentProps> = ({ name }) => {
  return <div>Hello, {name}!</div>;
};

export default MyComponent;
