import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';  
import { Route, Link, Switch, NavLink } from 'react-router-dom'; 
import FAQ from './About/FAQ/FAQ'; 
import Company from './About/Company/Company';
import People from './People/People';
import Character from './Character/Character';

export default <Switch>
    <Route path='/about' render={ () => {
    return <About>
             <Route path='/about/faq' component={FAQ} />
             <Route path='/about/company' component={Company} />
           </About>
    }} />
  <Route exact path='/' component={Home} />
  <Route exact path="/people" component={People} />
  <Route path="/people/:id" component={Character} />
  <Route path="" render={ ()=> {
    return <div>
              <h1> Nothing at this route! </h1>
           </div>
  }}/>
  </Switch>