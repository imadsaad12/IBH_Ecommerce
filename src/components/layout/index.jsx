import React from 'react';
import Bar from './bar';

export default function Layout({ children }) {
  return (
    <>
      <Bar />
      <div>{children}</div>
    </>
  );
}
