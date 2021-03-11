import React, { Component } from 'react';
import {Link} from 'react-router-dom';
class Pricing extends Component {
    state = { 
        price:[
            {id:1,price:30,name:"Eggs"},
            {id:2,price:45,name:"Apples"},
            {id:3,price:90,name:"Mango"},
            {id:4,price:100,name:"Banana"}
        ]
     }
    render() { 
        return ( 
            <React.Fragment>
            <h1>Price</h1>
            <ul>
                {this.state.price.map(price=>(
                    <li key={price.id}>
                        <Link to={`/price/${price.price}/${price.name}`}>{price.name}</Link>
                    </li>
                ))}
            </ul>
            </React.Fragment>
            
        
         );
    }
}
 
export default Pricing;