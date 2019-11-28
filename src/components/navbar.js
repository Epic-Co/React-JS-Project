import React from 'react';
import {Component} from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import logo from './logo.png';
import searchIcon from './search-icon.png';
import {Link} from 'react-router-dom';
class Navbar extends Component{
    constructor()
    {
      super();
    }
    render()
    {
        return(
            <div className="container fluid" style={{maxWidth: "100%",fontSize:"1.2vw"}}>
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <a className="navbar-brand" href="#">
      <img src={logo} height="39vh" alt="not available"></img>
  </a>
  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#">About Us</a>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          FEST TYPE
        </a>
        <ul class="dropdown-menu headerCategory">
              <li style={{float:"left"}}><Link to="">Technical Fests</Link></li>
              <li style={{floLinkt:"left"}}><Link to="">Cultural Fests</Link></li>
              <li style={{float:"left"}}><Link to="">Sports Fests</Link></li>
              <li style={{float:"left"}}><Link to="">Literature Fests</Link></li>
              <li style={{float:"left"}}><Link to="">Management Fests</Link></li>
            </ul>
      </li>
      <li className="nav-item dropdown">
        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          EVENT TYPE
        </a>
        <ul class="dropdown-menu headerCategory">
              <li style={{float:"left"}}><Link to="">Workshops</Link></li>
              <li style={{floLinkt:"left"}}><Link to="">Seminar</Link></li>
              <li style={{float:"left"}}><Link to="">Concerts</Link></li>
              <li style={{float:"left"}}><Link to="">Fun & other events</Link></li>
              <li style={{float:"left"}}><Link to="">Conferences</Link></li>
        </ul>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="">Login</Link>
      </li>
      <li className="nav-item ">
        <Link className="nav-link" to="/add">Create Event</Link>
      </li>
    </ul>
  </div>
  <a className="navbar-brand" href="#">
      <img src={searchIcon} height="39vh"alt="not available"></img>
  </a>
</nav>
            {/* <nav className="menu">
                <h1 style={{ backgroundImage:  'url('+ logo + ')'}}className="menu__logo">Epic Co.</h1>
    
                <div id="navDiv" className="menu__right">
                    <ul className="menu__list">
                        <li className="menu__list-item"><Link className="menu__link " to="/">HOME</Link></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">ABOUT US</a></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">EVENT TYPE</a></li>
                        <li className="menu__list-item"><a className="menu__link " href="#">FEST TYPE</a>z</li>
                        <li className="menu__list-item"><a className="menu__link " href="#">LOGIN</a></li>
                        <li className="menu__list-item"><Link className="menu__link " to="/add">CREATE EVENT</Link></li>
                    </ul>
    
                    <button  style={{ backgroundImage:  'url(' + searchIcon + ')'}} className="menu__search-button"></button>
    
                    <form className="menu__search-form hide" method="POST">
                       <input className="menu__search-input" placeholder="Type and hit enter"/>
                    </form>
                </div>
            </nav> */}
        </div>
        )
    }
}
export default Navbar;