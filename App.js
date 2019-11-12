import React,{Component} from 'react';
import Navbar from './components/navbar.js'
import './App.css';
import Addevent from './components/addEvents.js'
import {Switch,BrowserRouter,Route} from 'react-router-dom';
import Main from './components/mainPage.js';
class App extends Component
{
  constructor()
  {
    super();
    this.state=(
      {
        events:[]
      }
    )
    this.add=this.add.bind(this);
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
        <Route exact path = "/" render={()=><Main event={this.state.events}/>}/> 
        <Route path = "/add" render={ () => <Addevent onAdd = { this.add }> </Addevent>}/>
        </Switch>
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
