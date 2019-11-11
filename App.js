import React,{Component} from 'react';
import Navbar from './components/Navbar.jsx'
import Addevent from './components/Addevent.jsx'
import {Switch,BrowserRouter,Route} from 'react-router-dom';

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
        <Route path = "/add" render={ () => <Addevent onAdd = { this.add }> </Addevent>}/>
      </BrowserRouter>
    </div>
  )
  }
}

export default App;
