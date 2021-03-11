import React from 'react';
import Joi from 'joi-browser';
import Form from './form';
class AddNew extends Form {
    state = { 
        teachers:{
            id:'',
            name:'',
            dept:''
        },
        errors:{}
     }
    schema = {
        name:Joi.string().required().label('Name'),
        dept:Joi.string().required().label('Department')
    }
    back = () => {
        this.props.history.push('/');
    }
    doSubmit = () => {
        // server
        console.log('new record added.')
    }
    render() { 
        return ( 
            <React.Fragment>
                 <h1 align="center" className="text text-info">Add New Teacher</h1>
                 <button className="btn btn-primary" onClick={this.back}>Back to Home</button>
                 {this.renderInput('name','Name')}
                 {this.renderInput('dept','Department')}
            </React.Fragment>
           
         );
    }
}
 
export default AddNew;