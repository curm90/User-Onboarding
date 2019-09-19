import React, { useState } from 'react';
import './App.css';
import UserForm from './Form';

import initialValues from './data';

function App() {
  const [userList, setUserList] = useState(initialValues);
  const [error, setError] = useState('');

  return (
    <div className='App'>
      <UserForm initialValues={initialValues} />
    </div>
  );
}

export default App;
