import Error from 'next/error';
import React, { useState } from 'react';

export default function Props() {
  const [state, setState] = useState<any>({ node: { title: 'Test' } });
  return (
    <>
      <button
        type="button"
        onClick={() => {
          throw new Error({ statusCode: 400 });
        }}
      >
        Throw
      </button>
      ;
      <button
        type="button"
        onClick={() => {
          setState(null);
        }}
      >
        Set null error
      </button>
      <h1>{state.node.title}</h1>
    </>
  );
}
