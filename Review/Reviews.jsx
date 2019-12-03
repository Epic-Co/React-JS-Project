import React,{Component} from 'react';
import { Card, Button, CardTitle, CardText,CardImg,CardBody, Row, Col ,CardFooter,CardHeader} from 'reactstrap';
import StarRatingComponent from 'react-star-rating-component';
import { MDBBtn, MDBIcon } from "mdbreact";
import '../index.css'

class Reviews extends Component{

    constructor()
    {
        super();

        this.state = (
            {
                reviews : [],
                rating : 0,
            }
        )
    }
    handleSubmit = event => {
        console.log("hello");

        event.preventDefault();
        

        var obj={
            name:'',
            college:'',
            fest:'',
            rev:'',
            date:'',
            time:'',
            rate:'',
            count:0,
            comments : []
        }
        obj.name = document.getElementById("1").value;

        obj.college = document.getElementById("2").value;

        obj.fest = document.getElementById("3").value;

        obj.rev = document.getElementById("4").value;
        
        var tempDate = new Date();

        var date = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
        
        var time =  tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();

        obj.rate = this.state.rating;

        obj.date = date;

        obj.time = time;

        obj.count = this.state.count;
  
        this.add(obj);
    }
    componentDidMount()
  {
      fetch('http://localhost:3000/reviews')

      .then( res => { 
                       return res.json()
                    } 
           )
      .then( res => {  
                      this.setState( { reviews:res } );
                    }
           )
  }
    add(data)
    {

      fetch('http://localhost:3000/reviews',
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

  onStarClick(nextValue)
  {
    this.setState( { rating: nextValue } );
  }

  handle(event,r,h)
  {

    console.log(this.state.reviews[0]);

    console.log("hello"+r);

    var temp = document.getElementById(""+r).value;

    r=r-1;

    var temp1= this.state.reviews[r];

    var tempDate = new Date();

    var date1 = tempDate.getFullYear() + '-' + (tempDate.getMonth()+1) + '-' + tempDate.getDate() ;
        
    var time1 =  tempDate.getHours()+':'+ tempDate.getMinutes()+':'+ tempDate.getSeconds();

    var obj = {
      date:date1,
      time:time1,
      temp2:temp,
    }

    if(h==0)
      temp1.comments.push(obj);
    else
      temp1.count=temp1.count+1;

    fetch('http://localhost:3000/reviews/'+parseInt(r+1),{
    method: "PUT",
    headers:{  "Content-Type":"application/json",},
    body:JSON.stringify(temp1)
    })

    this.componentDidMount();

  }
  
    render()
    {
        return (

            <div>
                    <h4><b><center>ELEGANT REVIEWS</center></b></h4>
                 {
                    this.state.reviews.map( (r) => 
   
                        <Col sm="10">
             
                           <Card>
             
                               <CardBody>

                                <CardHeader> <center><h3><b>{r.fest} AT {r.college} , <i><u>{r.name}</u></i></b></h3></center> </CardHeader>
             
                                <CardText> <h5><center><i>{r.rev}</i></center></h5>   </CardText>
             
                                </CardBody>

                               <CardFooter>
      
                                  <i> {r.date} , {r.time}</i> 
                                  
                                  <StarRatingComponent   starCount={10}  value={r.rate}  />   <h2 onClick = {(event) => this.handle(event,r.id,1) } >
                                    
                                  <i className="fa fa-heart" style = { {fontSize:"24px",color:"red"} } ></i> {r.count}</h2>

                                  <b>COMMENTS.......</b>

                               </CardFooter>
                               {
                                 r.comments.map( (com) => {
                                    
                                 return  <div>

                                 <div className = "comment" >{com.temp2} </div>

                                  <br/>  </div>

                                 }

                                 )
                               }
                                  <div>

                                  <input  className = "comment" type = "text" id = {r.id} style = {{width:"70%"}}/>

                                    <button onClick =  {(event) => this.handle(event,r.id,0)} style = {{width:"10%"}}>SEND</button>

                                  </div>
                            
                           </Card>
              
                       </Col>
                       
                    )
                       
                }
                 
                <h1><i><center>WANT TO SHARE REVIEWS!!!</center></i></h1>

                <center>

                    <form onSubmit = {this.handleSubmit}>

                              <label> NAME</label><br/>
                              <input id = "1" type = "text" /> <br/>

                              <label> College/University</label><br/>
                              <input id = "2" type = "text" /> <br/>

                              <label> Event Name</label><br/>
                              <input id = "3" type = "text" />

                              <div className="form-group">

                                  <label for="exampleFormControlTextarea3"> <b> ADD REVIEWS </b> </label>

                                  <textarea id="4" className="form-control"  rows="7"></textarea>
                              
                              </div>
                          
                              <h2>Rate Your Experience</h2>

                                    <StarRatingComponent   starCount={10}  value={this.state.rating}   onStarClick={this.onStarClick.bind(this)}   />
                                    
                              <br/>

                              <input type = "submit" value="SUBMIT"></input>

                    </form>

                </center>

           </div>

        );
    }
}
export default Reviews;