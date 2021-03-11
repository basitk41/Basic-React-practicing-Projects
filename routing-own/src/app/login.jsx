import React from 'react';
import Form from './form';
import Joi from 'joi-browser';
class Login extends Form {
    //username = React.createRef();
    state = { 
        account:{username:'',password:''},
        errors:{},
     };
    schema = {
        username:Joi.string().required().label('Username'),
        password:Joi.string().required().label('Password')
    }
    // componentDidMount(){
    //     this.username.current.focus();
    // }
    doSubmit = ()=>{
       // server call
       console.log("Logged in");
    }
    
    render() { 
        return ( 
            <React.Fragment>
            <h1>Login</h1>
            <form onSubmit={this.hadleForm} >
               {this.renderInput('username','Username')}
               {this.renderInput('password','Password','password')}
               {this.renderButton('Login')}
            </form>
        </React.Fragment>
         );
    }
}
export default Login;