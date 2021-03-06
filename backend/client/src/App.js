import React from 'react';
import Authentication from './components/authentication';
import Navbar from './components/Navbar';
import Homepage from './pages/Homepage/Homepage';
import { Route, Switch } from 'react-router';
import BlogPage from './pages/Blog/BlogPage';
import { BrowserRouter } from 'react-router-dom';
import SingleBlog from './pages/Blog/SingleBlog';
import WriteBlog from './pages/Blog/WriteBlog';
import Electricity from './pages/Energy/Electricity';
import Shopping from './pages/Shopping/shopping';
import Travelling from './pages/Travel/travelling';
import Pwdchange from './components/pwdchange';
import Home from './pages/Home/home';
import Food from './pages/Food/food';
import Buy from './pages/Buy/buy';
import { AuthProvider } from './components/firebase/context';
import SingleShopping from './pages/Shopping/SingleShopping/SingleShopping';
import SingleFood from './pages/Food/SingleFood/SingleFood';
import SingleHome from './pages/Home/SingleHome/SingleHome';
import ChatbotMain from './pages/Chatbot/ChatbotMain';
import Sell from './pages/Sell/sell';
import Profile from './pages/Profile/profile';
import './App.css'
import Chatbutton from './pages/Chatbot/Chatbutton';
import ProductDetails from './components/BuyingCard/productDetails';
import Accodion from './pages/Accodion/Accodion';
function App() {
  return (
   <AuthProvider>
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route path='/' exact>
          <Homepage />
        </Route>
        <Route path='/homeCategory'>
          <Home />
        </Route>
        <Route path='/authentication'>
          <Authentication />
        </Route>
        <Route path='/electricity'>
          <Electricity />
        </Route>
        <Route path='/blogspage'>
          <BlogPage />
        </Route>
        <Route path='/buy'>
          <Buy />
        </Route>
        <Route path='/sell'>
          <Sell />
        </Route>
        <Route path='/singleBlog/:id' component={SingleBlog} />
        <Route path='/singleShopping/:id' component={SingleShopping} />
        <Route path='/singleFood/:id' component={SingleFood}/>
        <Route path='/singleHome/:id' component={SingleHome}/>
        <Route path='/buyingItem/:id' component={ProductDetails}/>
        <Route path='/writeBlog'>
          <WriteBlog />
        </Route>
        <Route path='/shopping'>
          <Shopping />
        </Route>
        <Route path='/travelling'>
          <Travelling />
        </Route>
        <Route path='/food'>
          <Food />
        </Route>
        <Route path='/pwdchange'>
          <Pwdchange />
        </Route>
        <Route path='/userprofile'>
          <Profile />
        </Route>
        <Route path='/chatbot'>
          <ChatbotMain />
        </Route>
        <Route path='/Accodion'>
          <Accodion />
        </Route>
      </Switch>
    </BrowserRouter>
    <Chatbutton />
  </AuthProvider>
  );
}

export default App;
