import { Component } from 'react';
import Joi from 'joi-browser';
import Input from './input';
class Form extends Component {
    state = { 
        teachers:{},
        errors:{}
     }
     validate = () =>{
        let result = Joi.validate(this.state.teachers,this.schema,{abortEarly:false});
        if(!result.error) return null;
        const errors = {};
        for(let item of result.error.details){
              errors[item.path[0]] = item.message;
        }
        return errors;
     //    console.log(result);
     //     const errors = {};
     //     if(this.state.account.username.trim()==='')
     //         errors.username = "Username is Required.";
     //     if(this.state.account.password.trim()==='')
     //         errors.password = "Password is Required.";
     //     return (Object.keys(errors).length===0)?null:errors;
     }
     hadleForm = e =>{
        // const username = this.username.current.value;
        e.preventDefault();
        const errors = this.validate();
        //console.log(errors);
        this.setState({errors:errors||{}});
        if(errors) return;
        this.doSubmit();
        
    }
    validateProperty = ({name,value})=>{
        const obj = {[name]:value};
        const schema = { [name]: this.schema[name] };
        const { error } = Joi.validate(obj,schema); 
        if(!error) return null;
        return error.details[0].message;
        //  if(name==='username'){
        //      if(value.trim()==='') return "Username field should not be empty."
        //  }
        //  if(name==='password'){
        //     if(value.trim()==='') return "Password field should not be empty."
        // }
    }
    handleChange = ({currentTarget:input}) =>{
        const errors = {...this.state.errors};
        const errorMessage = this.validateProperty(input);
        if(errorMessage) errors[input.name]=errorMessage;
        else delete errors[input.name];

        const teachers = {...this.state.teachers};
        teachers[input.name] = input.value;
        this.setState({teachers,errors});
    }
   renderButton(label){
     return (
        <button 
        disabled={this.validate()}
        className="btn btn-primary"
        >{label}</button>
     );
   }
   renderInput(name,label,type='text'){
    const {teachers,errors} = this.state;
       return (
        <Input 
        type={type}
        onChange={this.handleChange}
        label={label}
        value={teachers.name}
        name={name}
        error={errors[name]}
        />
       );
   }
    
}
 
export default Form;