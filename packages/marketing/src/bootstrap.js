import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.js'
const mount = (el) => (
 ReactDOM.render(<App/>, el)
);
if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#dev-marketing');
  console.log(devRoot)
  if (devRoot) {
    mount(devRoot);
  }
}
export {mount}
