import React,{Component} from 'react';
import '../addToCart.css';

export default class AddToCart extends Component{
    constructor(){
        super();
        this.state = {
            cartEvents:[]
        }

    }
    componentDidMount(){
        fetch('http://localhost:3005/cartEvents')
        .then(res=>res.json)
        .then(res=>this.setState({cartEvents:res}))
    }
    render(){
        // console.log("++");
        // console.log(this.props.eve);
        // this.state.cartEvents.push(this.props.eve);
        fetch('http://localhost:3005/cartEvents',
        {
            method: "POST",
            headers:{  "Content-Type":"application/json",  },
            body:JSON.stringify(this.props.eve),
        } )
       .then( res => {
           if(res.ok)
              return res.json()
            } )
        .then( res => {
            console.log(JSON.stringify(res));
            } )
            console.log("--");
            console.log(this.state.cartEvents);
        return(
            <div>
                {
                this.state.cartEvents.map((event)=>
                   <div style={{height: "100vh",backgroundColor: "#ffff80"}}>
                         <div className="card text-center">
                             <div className="card-header">
                                My Cart
                             </div>
                             <div className="card-body">
                                 <h5 className="card-title">{event.fname}</h5>
                                 <img src={event.imgUrl} alt="not available"></img>
                                 <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                                 <a href="#" className="btn btn-primary">Go somewhere</a>
                             </div>
                             <div className="card-footer text-muted">
                                2 days ago
                             </div>
                         </div>
                    </div>
                    )     }
            </div>
        )
    }
}