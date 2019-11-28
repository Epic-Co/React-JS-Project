import React,{Component} from 'react';
import Navbar from './components/navbar.js'
import './App.css';
import Addevent from './components/addEvents.js'
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Main from './components/mainPage.js';
import Booking from './components/booking.js';
import Hotels from './components/hotels.js';
import AddToCart from './components/addToCart.js';
import Reviews from './components/reviews.js';
class App extends Component
{
  constructor()
  {
    super();
    this.state=(
      {
        events:[],
        cityEvents:[]
      }
    )
    this.add=this.add.bind(this);
    this.selectEve=this.selectEve.bind(this);
    this.addToCart=this.addToCart.bind(this);
  }

  componentDidMount()
  {
      fetch('  http://localhost:3000/events')
      .then(res => {return res.json()})
      .then(res => {
           console.log(JSON.stringify(res));
           this.setState({events:res});
                    }
          )
  }
  selectEve(event){
    console.log(event);
    this.setState({selectedEvent:event})
  }
  addToCart(event){
    //console.log("++++");
   //console.log(event);
   this.setState({carteve:event})
  //  this.setState(
  //    {
  //      cityEvents : this.state.cityEvents.push(event),
  //    }
  //  )
  // console.log(this.state.cityEvents);
  }
  add(data)
  {
    console.log(data);
      this.state.events.push(data);
      fetch('http://localhost:3000/events',
      {
        method: "POST",
          headers:{  "Content-Type":"application/json",  },
            body:JSON.stringify(data),
      } )
      .then( res => {
            if(res.ok)
              return res.json() 
        } )
      .then( res => {
            console.log(JSON.stringify(res));
        } )
  }

  render()
  {
    return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <Switch>
        <Route exact path = "/" render={()=><Main events={this.state.events} selectEvent={this.selectEve}/>}/> 
        <Route path = "/add" render={ () => <Addevent onAdd = { this.add }> </Addevent>}/>
        <Route path="/booking" render={()=><Booking event={this.state.selectedEvent} cartEve={this.addToCart}></Booking>}/>
        <Route path="/hotel" render={()=><Hotels></Hotels>}/>
        <Route path="/reviews" render={()=><Reviews></Reviews>}/>
        <Route path="/goToCart" render={()=><AddToCart eve={this.state.carteve}></AddToCart>}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
