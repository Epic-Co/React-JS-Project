import React,{Component} from 'react';
import '../App.css';
import $ from 'jquery';
export default class Card extends Component{
  
    handle =(event)=>{
        $(document).ready(function(){
                $("tickBtn").css("color","red");
            
        });
    }
    render(){
        const events=this.props.events;
        return(
            <div className="column">
                <img src={events.imgUrl} style={{height:"20vw",width:"20vw"}}></img>
                <div className="container">
                    <p style={{fontSize:"1.5vw",fontStyle:"italic",alignContent:"center"}}>{events.fname}</p><br/>
                    <p style={{fontSize:"1vw"}}>{events.estartdate}-{events.eenddate}</p>
                </div>
                <div className="middle">
                    <div class="text">
                        <button className="tickBtn" onMouseOver={this.handle} data-hover="Register Now">{events.efee}</button>
                        {/* <button className="tickBtn1">Register Now</button> */}
                    </div>
                </div>
            </div>
        )
    }
}