import React, { Component } from 'react';
import Authentication from './components/authentication';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage'
import { Route, Switch } from 'react-router';
import BlogPage from './pages/Blog/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import Buy from './components/Products/Buy';
import Sell from './components/Products/Sell';
import SingleBlog from './pages/Blog/SingleBlog';
import WriteBlog from './pages/Blog/WriteBlog';
import Homepage0 from './pages/Homepage/Homepage0';
import Electricity from './pages/Energy/Electricity/Electricity';

function App() {
  return (
    // <Login/>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/home' exact>
          <Homepage />
        </Route>
        <Route path='/home0' exact>
          <Homepage0 />
        </Route>
        <Route path='/electricity' exact>
          <Electricity />
        </Route>
        <Route path='/' exact>
          <Authentication />
        </Route>
        <Route path='/blogs'>
          <BlogPage />
        </Route>
        <Route path='/buy'>
          <Buy />
        </Route>
        <Route path='/sell'>
          <Sell />
        </Route>
        <Route path='/singleBlog'>
          <SingleBlog />
        </Route>
        <Route path='/writeBlog'>
          <WriteBlog />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
