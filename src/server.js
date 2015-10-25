import express from 'express';
import React from 'react';
import ReactDOM from 'react-dom/server';
import Html from './components/Html';

const server = global.server = express();

server.get('/', (req, res) => {
  const html = ReactDOM.renderToString(React.createElement(Html));
  res.send('<!doctype html>\n' + html);
})

server.listen(3000);