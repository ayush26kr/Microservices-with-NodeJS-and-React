import React from "react";
import logo from './logo.svg';
import './App.css';
import Navbar from './navbar';
import Body from './Body';
import Dashboard from './Dashboard';
import {BrowserRouter,Route} from 'react-router-dom';
import PostCreate from "./PostCreate";
import PostList from "./PostList";

const App = () => {
  return (

    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>

  //   <div className="App">
  //   <BrowserRouter>
  //
  //   <Navbar/>
  //
  //   <Route path='/' component={Body} exact/>
  //
  //   <Route path='/dashboard' component={Dashboard} exact/>
  //
  //
  //   </BrowserRouter>
  //
  // </div>
  );
};
export default App;
