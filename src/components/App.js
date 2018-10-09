import React, { Component } from 'react';
import Home from './Home/Home';
import About from './About/About';  
import { Route, Link, Switch, NavLink } from 'react-router-dom'; 
import FAQ from './About/FAQ/FAQ'; 
import Company from './About/Company/Company';
import People from './People/People';
import Character from './Character/Character';

import routes from './routes'; 

class App extends Component {

  // componentDidMount() {
  //   //hashChange is recognized by browser
  //   window.addEventListener('hashChange', ()=> this.forceUpdate())
  // }

  render() {
    // let myRoute = <Home />
    // if (window.location.hash === '/#about') {
    //   myRoute = <About /> 
    // }
    return (
      <div>
        This is App.js
        <div>
          {/* <a href='#/'>home</a>
          <a href='#/about'>about</a> */}

          {/* ---OR--- */}

          {/* <Link to='/'>Home</Link>
          <Link to='/about'>About</Link>
          <Link to='/people'>People</Link> */}
          <NavLink activeClassName='active' exact to='/'><button>Home</button></NavLink>
          <NavLink activeClassName='active' to='/about'>About</NavLink>
          <NavLink activeClassName='active' to='/people'>People</NavLink>

        </div> 
        {routes}

        {/* <Switch>
        <Route path='/about' render={ () => {
            return <About>
                     <Route to='about/faq' component={FAQ} />
                     <Route to='about/company' component={Company} />
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
        </Switch>   */}

      </div>
    );
  }
}

export default App;
