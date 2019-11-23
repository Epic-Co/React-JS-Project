import React,{Component} from 'react';

export default class Booking extends Component{
    render(){
        return(
            <div>
                <img src={this.props.imgUrl} alt="image not available"></img>
                <iframe 
                   ng-src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed"
                  src="https://maps.google.com/maps?f=q&amp;source=s_q&amp;hl=en&amp;geocode=&amp;q=IIM, INDORE, Rau - Pithampur Rd, Indore, Madhya Pradesh, India&amp;t=m&amp;z=16&amp;iwloc=A&amp;ll=22.625626,75.79096400000003&amp;output=embed">
                </iframe>
            </div>
        )
    }
}