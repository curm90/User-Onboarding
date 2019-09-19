import React from 'react';
import './App.css';
import UserForm from './Form';

import initialValues from './data';

function App() {
  return (
    <div className='App'>
      <UserForm initialValues={initialValues} />
    </div>
  );
}

export default App;
