import './Header.css';
import React from 'react';
import Usuario from './Usuario';
import Sobre from './Sobre';
import {Route, Switch} from 'react-router-dom'

function Header() {
  return (
    <header>
        <h1>developers</h1>
        <nav>
          <Route path='/Usuario' component= {Usuario} >cavalo branco </Route>
          <Route path='/Sobre' component= {Sobre}>avalo branco </Route>
        </nav>
    </header>
  );
}

export default Header;
