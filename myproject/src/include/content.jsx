import React, { Component } from 'react';
import Box from './box';
class Content extends Component {
    state = {
        counters:[
            {id:1,name:"Basit"},
            {id:2,name:"Ali"},
            {id:3,name:"Khan"},
            {id:4,name:"Jan"}
            ]
    };
    handleDelete =(valueId)=>{
         const counters = this.state.counters.filter(n=>n.id!==valueId);
         this.setState({counters} ); 
    }
    render() { 
        return ( 
            <React.Fragment>
                <div className="row">
                   {this.state.counters.map(counter=>(<div className="col-sm-3"> <Box key={counter.id} onDelete={this.handleDelete } counter={counter}><h1>No {counter.id}</h1></Box></div>))} 
                </div>
               
            </React.Fragment>
         );
    }
}
 
export default Content;