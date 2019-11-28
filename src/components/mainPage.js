import React,{Component} from 'react';
import '../App.css';
import search from './search.png';
import Cards from './cards.js';
import blogger from './blogger.png';
import calendar from './calendar.png';
import images from './images.js';
import imgEvent from './eventImages.js';
import {Link} from 'react-router-dom';
export default class Main extends Component{
  constructor(props){
    super(props);
    this.state={
      data:''  
    }
 this.handleClick=this.handleClick.bind(this);
this.goingBottom=this.goingBottom.bind(this); 
  }
  goingBottom(eve) {
    document.body.scrollTop = 600;
    document.documentElement.scrollTop = 600;
  }
  handleKey=(e)=>{
    if (e.keyCode === 13) {
      e.preventDefault();
      document.getElementById("sear").click();
    }
  }

  handleChange(e){
     // e.preventDefault();
      this.setState({data:e.target.value})
  }
  handleClick(e){
      e.preventDefault();
      this.setState({data:this.state.data})
      this.goingBottom();
  }
  render(){
        let cityEvents=this.props.events.filter((event,index)=>{
            return (
              event.city.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1||
              event.fname.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1||
              event.fest.toLowerCase().indexOf(this.state.data.toLowerCase())!==-1
            )
        })
      return(
        <div class="container12">
            <div id="carousel" className="carousel slide" data-ride="carousel">
                 <div className="carousel-inner">
                      <div className="item active">
                           <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[0]} alt="First slide"/>
                      </div>
                      <div className="item">
                            <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[1]} alt="Second slide"/>
                      </div>
                      <div className="item">
                           <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[2]} alt="Third slide"/>
                       </div>
                      <div className="item">
                           <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[3]} alt="Fourth slide"/>
                     </div>
                      <div className="item">
                            <img className="d-block w-100"style={{height:"30vw"}} src={imgEvent[4]} alt="Fifth slide"/>
                     </div>
                 </div>
        </div>
        <div className="car-head">
            <b><p>No. 1 College Fests & Events Ticketing Platform</p></b>
        </div>
        <div className="car-for">
              <input type="text" id="searchInp" placeholder="Search events and fests by name,city or type" name="search"
                  onKeyUp={this.handleKey}  value={this.state.data} onChange={this.handleChange.bind(this)}/>
               <button onClick={this.handleClick} className="searBtn">
               <img id="sear" src={search} style={{height:"1.5vw"}} alt="not available" onClick={(e)=>this.handleClick}></img></button>
       </div>
        <hr className="hr1"></hr>
        <div style={{backgroundColor:"grey"}}>
             <center>
             <table  className="tbl">
                <tr>
                   <td className="events" >
                       <img src={calendar} className="eImg" alt="not available"></img>
                       <p>Events</p>
                  </td>
                   <td className="blogs">
                       <Link to="/reviews">
                           <img src={blogger} className="eImg"alt="not available">
                           </img>
                       </Link>
                        
                      <p>Reviews</p>
                  </td>
               </tr>
            </table>
            </center>
        </div>
         <hr className="hr1"></hr>
        <div className="d2">
            {
              cityEvents.length>0?cityEvents.map((event,index)=><Cards key={index} events={event} selectedEvent={()=>this.props.selectEvent(event)}></Cards> ):
              <p style={{textAlign:"center",fontSize:"3vw",padding:"2px",marginTop:"30vh"}}>No Results Found</p>
            }
        </div>
        <div className="d4">

         </div>
        <div className="d3">
         <center><button className="view">View All Events</button></center>
         </div>
      </div>
      )
  }
}