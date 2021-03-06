import React from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';


import HomePage from './pages/homepage/homepage.component.jsx';
import ShopPage from './pages/shop/shop.componnent.jsx';
import Header from './components/header/header.component.jsx'
import SignInAndSignUp from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component.jsx';

function App() {
 
  return (
    <div>
    <Header/>
      <Switch>
      <Route  exact path='/'  component={HomePage} />
      <Route   path='/shop'   component={ShopPage} />
      <Route   path='/signin' component={SignInAndSignUp} />


      
      </Switch>
        


    </div>
  );
}

export default App;
