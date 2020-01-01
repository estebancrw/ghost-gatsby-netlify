import React, { Fragment } from 'react';
import { Global, css } from '@emotion/core';

// Create styles for the Global component
const globalStyles = css`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html,
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto',
      'Roboto Light', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans',
      'Helvetica Neue', sans-serif, 'Apple Color Emoji', 'Segoe UI Emoji',
      'Segoe UI Symbol';
  }
`;

const Layout = ({ children }) => (
  <Fragment>
    <Global styles={globalStyles} />
    <header></header>
    <main>{children}</main>
  </Fragment>
);

export default Layout;
