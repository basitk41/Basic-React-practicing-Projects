import React from 'react';
import queryString from 'query-string';
const PricingDetails = (props) => {
    const search = queryString.parse(props.location.search);
    
    function searchQuery(){
        let address = '';
        const keys = Object.keys(search);
        for(let key of keys){
             address= address +' '+ search[key];
        }
        return address;
    };
    const back = ()=>{
        //props.history.push('/price'); 
        props.history.replace('/price');
    }
    return ( 
        <React.Fragment>
        <h1>Price of {props.match.params.name} is {props.match.params.price} </h1>
        <h2>Address: {searchQuery()}</h2>
        <button className="btn btn-info" onClick={back}>Back</button>
    </React.Fragment>
     );
}
 
export default PricingDetails;