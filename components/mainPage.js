import React,{Component} from 'react';
import '../App.css';
import Card from './cards.js';
import blogger from './blogger.png';
import calendar from './calendar.png';
import images from './images.js'
export default class Main extends Component{
  render(){
      return(
        <div class="container">
        <div id="carousel" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="item active">
            <img className="d-block w-100" src="https://www.skyelive.co.uk/wp-content/uploads/2018/03/ManoLeTough-RyanBuchanan_029-e1521323518709.jpg" alt="First slide"
            style={{height:"30vw"}}/>
          </div>
          <div className="item">
            <img className="d-block w-100" src="https://cdn.thecollegefever.com/upload/25670859-1570173604709.jpg" alt="Second slide"
            style={{height:"30vw"}}/>
          </div>
          <div className="item">
            <img className="d-block w-100" src="https://cdn.thecollegefever.com/upload/25741119-1573032688295.jpg" alt="Third slide"
            style={{height:"30vw"}}/>
          </div>
          <div className="item">
            <img className="d-block w-100" src="https://cdn.thecollegefever.com/upload/23539599-1570397100124.jpg" alt="Fourth slide"
            style={{height:"30vw"}}/>
          </div>
          <div className="item">
            <img className="d-block w-100" src="https://cdn.thecollegefever.com/upload/24183810-1572772033933.png" alt="Fifth slide"
            style={{height:"30vw"}}/>
          </div>
        </div>
        </div>
        <div className="car-head">
            <b><p>No. 1 College Fests & Events Ticketing Platform</p></b>
        </div>
        <div className="car-for">
        <form action="/action_page.php">
               <input type="text" placeholder="Search events and fests by name,city or type" name="search" 
               style={{width:"70vw",borderRadius:"2vw",padding:"0.5vw",boxShadow:"0.2vw 1vh #888888"}}/>
            </form>
        </div>
        <hr style={{color: "white",
            backgroundColor: "white",
            height: 1}}></hr>
        <div style={{backgroundColor:"grey"}}>
        <center>
        <table style={{width:"20vw",fontSize:"1vw",color:"white",padding:"1vw",border:"1",borderColor:"white"}}>
          <tr>
             <td className="events" >
                 <img src={calendar} style={{width:"5vw"}}></img>
                 <p>Events</p>
                 
              </td>
              <td className="blogs">
                <img src={blogger} style={{width:"5vw"}}></img>
                <p>Blogs</p></td>
          </tr>
         </table>
         </center>
         </div>
         <hr style={{color: "white",
            backgroundColor: "white",
            height: 1}}></hr>
          <div className="d2">
            {this.props.event.map((event,index)=>(
               <Card key={index} events={event} ></Card>
            ))
            }
          </div>
         <center><button className="view">View All Events</button></center>
        </div>
      )
  }
}