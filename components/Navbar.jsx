import React from 'react';
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import searchIcon from './search-icon.png';
class Navbar extends Component{
    constructor()
    {
      super();
    }
    render()
    {
        return(
            <div className="container center">
            <nav className="menu">
                <h1 style={{ backgroundImage:  'url('+ logo + ')'}}className="menu__logo">Epic Co.</h1>
    
                <div className="menu__right">
                    <ul className="menu__list">
                        <li className="menu__list-item"><a className="menu__link " href="#">HOME</a></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">ABOUT US</a></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">EVENT TYPE</a></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">FEST TYPE</a></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">LOGIN</a></li>
                    </ul>
    
                    <button  style={{ backgroundImage:  'url(' + searchIcon + ')'}} className="menu__search-button"></button>
    
                    <form className="menu__search-form hide" method="POST">
                       <input className="menu__search-input" placeholder="Type and hit enter"/>
                    </form>
                </div>
            </nav>
        </div>
        )
    }
}
export default Navbar;
