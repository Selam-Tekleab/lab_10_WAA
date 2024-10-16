import React from 'react';
import Posts from './Posts';
import Comments from './Comments';
import { DataProvider } from './context';
import Todo from './Todo';
import Search from './Search';

function App() {
  return (
    <DataProvider>
      <div>
        <h1>Welcome to Selam's App</h1>
        <Search /> 
        <Todo /> {}
        <Posts /> {}
        <Comments /> {}
      </div>
    </DataProvider>
  );
}

export default App;
