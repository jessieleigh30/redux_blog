import React from 'react';
import BlogList from './Components/BlogList';
import BlogForm from './Components/BlogForm';


import './App.css';

const App = () => ( 
  <div className="App">
    <BlogForm />
    <BlogList />
  </div>
);


export default App;