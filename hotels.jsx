import React,{Component} from 'react';
import App from '../App.js'
import { Card, Button, CardTitle, CardText,CardImg,CardBody, Row, Col } from 'reactstrap';

class Hotels extends Component
{
    constructor()
    {
        super();
        this.state = {
            hotels: [],
            hotels1: [],
        }
    }
    componentDidMount()
  {
      fetch('http://localhost:3000/hotels')
      .then( res => { 
                       return res.json()
                    } 
           )
      .then( res => {  
                      this.setState( { hotels:res } );
                    }
           )
  }
    handleSubmit = event =>
    {
      event.preventDefault();

      var temp=document.getElementById("1").value;

      console.log(temp);

      if(temp!="")
      {
        this.setState(
            {
                 hotels1: this.state.hotels.filter( hotel => { return hotel.state == temp })
            }
        )
      }
      console.log(this.state.records1);
    }
    render()
    {
        return (
            <div>

            <label> ENTER THE CITY WHERE YOU WANT TO SEARCH THE HOTELS</label><br></br>
            
            <form onSubmit={this.handleSubmit}> 

            <input id="1" type="text"></input>

            <input type="submit" value="submit"></input>

            </form >
            <div width="100%">
             {
             this.state.hotels1.map( (hotel) =>
     
             <Row sm="5">
     
                <Col sm="5">
     
                   <Card>
     
                     <img width="100%" height="150%" src= {hotel.link} alt="Card image cap" />
     
                       <CardBody>
     
                         <CardTitle><center><b>{hotel.name}</b></center></CardTitle>
     
                         <CardText><center><b>{hotel.city}</b></center></CardText>
     
                         <CardText><center><b>{hotel.state}</b></center></CardText>
     
                         <CardText><center><b>{hotel.phone}</b></center></CardText>
     
                       </CardBody>
     
                   </Card>
     
               </Col>
               
           </Row>   )
          }
       </div>
       </div>
            );
    }
}

export default Hotels;