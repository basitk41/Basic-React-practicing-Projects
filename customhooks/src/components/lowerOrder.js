import React, { Component } from 'react';
import highOrder from './highOrder';
class LowerOrder extends Component {
    state = { 
        count:0,
     }
     increment = () =>{
         
         this.setState({count:this.state.count+1});
     }
    render() { 
        return ( 
            <React.Fragment>
                <button className={this.props.btn}>Hover me</button>
                <h2>Counter:{this.state.count}</h2>
                <button onClick={this.increment} className="btn btn-primary">Increment</button>
            </React.Fragment>
         );
    }
}
 
export default highOrder(LowerOrder);