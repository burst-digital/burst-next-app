/* eslint-disable global-require, jsx-a11y/click-events-have-key-events, jsx-a11y/no-noninteractive-element-interactions */
import React, { useRef } from 'react';
import { NextPageContext } from 'next';
import Error from 'next/error';
import cleanStack from 'clean-stack';

function loadStackTrace(html: HTMLElement) {
  import('highlight.js').then(mod => mod.highlightBlock(html));
}
function ErrorStatus(props: ReturnType<typeof getInitialProps>) {
  const ref = useRef<any>();

  return (
    <>
      <Error statusCode={props.statusCode ?? 400} />

      {/* Check if debugging mode is enabled. */}
      {props.stack && (
        <>
          <link
            href={require('highlight.js/styles/github.css')}
            rel="stylesheet"
          />
          <details
            onClick={() => {
              loadStackTrace(ref.current);
            }}
          >
            <summary>Stack trace</summary>
            <pre>
              <code
                className="js"
                style={{
                  borderRadius: 4,
                  padding: 24,
                  margin: 24,
                  width: 'calc(100% - 96px)',
                }}
                ref={ref}
              >
                {cleanStack(props.stack)}
              </code>
            </pre>
          </details>
        </>
      )}
    </>
  );
}

function getInitialProps(props: NextPageContext) {
  const statusCode = props.res
    ? props.res.statusCode
    : props.err
    ? props.err.statusCode
    : 404;
  return { statusCode, stack: props.err?.stack };
}

ErrorStatus.getInitialProps = getInitialProps;

export default ErrorStatus;
