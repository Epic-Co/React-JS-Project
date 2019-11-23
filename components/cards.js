import React,{Component} from 'react';
import '../App.css';
import {Link} from 'react-router-dom';
//import $ from 'jquery';
export default class Card extends Component{
    render(){
        const events=this.props.events;
        console.log("**");
        console.log(this.props.events);
        return(
            <div className="column">
                <img src={events.imgUrl} className="cardImg" alt="not available"></img>
                <div className="container1">
                    <p className="contP">{events.fname}</p><br/>
                    <p style={{fontSize:"1vw"}}>{events.description}</p>
                    <p style={{fontSize:"1vw"}}>{events.estartdate}-{events.eenddate}</p>
                    <p style={{fontSize:"1vw"}}>{events.city}</p>
                </div>
                <div className="middle">
                        <button className="tickBtn" data-hover="Register Now">
                            <Link to="/booking" style={{textDecoration:"none",color:"white",fontSize:"1.5vw"}}>
                                {events.efee}</Link></button>
                        {/* <button className="tickBtn1">Register Now</button> */}
                </div>
            </div>
        )
    }
}