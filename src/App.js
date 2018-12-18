import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Home from "./Components/Home";
import styled from 'styled-components';


import './App.css';

const App = () => ( 
  <Switch>
    <Route exact path="/" component = {Home} />
  </Switch>
);


export default App;