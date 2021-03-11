import React, { Component } from 'react';
import Basit from '../images/basit.jpg';
class Box extends Component {
    state = {
       counter:[
           {id:this.props.counter.id},
           {name: this.props.counter.name}
        ]
    }
    styles = {
        border:"2px blue solid",
        
    }
    render() { 
        //console.log("props",this.props);
        return ( 
            <React.Fragment>
                <br/>
                {this.props.children}
                <div className="card" style={ this.styles }>
                    <img className="card-img-top" src={Basit} alt="Card cap"/>
                    <div className="card-body">
                        {this.state.counter.map(name=><h2 key={name.id}>{name.name}</h2>)}
                        <p className="card-text"></p>
                    </div>
                    <button onClick={()=>this.props.onDelete(this.props.counter.id)} className="btn btn-danger">Delete</button>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Box;