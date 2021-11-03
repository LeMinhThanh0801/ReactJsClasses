import React from 'react';
import ReactDOM from 'react-dom';
import AddClass from './components/classes/addclasses';
import Classes from './components/classes/classes';

ReactDOM.render(
  <React.StrictMode>
    <AddClass />
    <Classes />
  </React.StrictMode>,
  document.getElementById('root')
);
