import React, { Component } from 'react';
class Form extends Component {
    state = { 
        input:{id:0,name:"",fname:""},
        data:[
            {id:1,name:'Basit',fname:'Khan'},
            {id:2,name:'Ali',fname:'Ahmad'},
            {id:3,name:'Khan',fname:'Atif'},
        ],
        id:4,
    };
    handleSubmit = (e)=>{
     e.preventDefault();
    //  let data = this.state.data;
    //  let obj={
    //      id:this.state.id,
    //      name:this.state.name,
    //      fname:this.state.fname
    //  }
     //console.log('Form field:',name);
     const name=this.state.input.name;
     const fname=this.state.input.fname;
     let id = this.state.id;
     if(name!=='' && fname!==''){
        this.state.data.push({id,name,fname});
        const input={id:0,name:"",fname:""};
        this.setState({id:id+1,input});
     }
     
    };
    handleUpdateSubmit = (e)=>{
        e.preventDefault();
        // const name=this.state.input.name;
        // const fname=this.state.input.fname;
        // const id=this.state.input.id;
        const {name,fname,id} = this.state.input;
        //let id = this.state.id;
        const data = [...this.state.data];
        let index = this.state.data.findIndex(x=>x.id===id);
        //console.log(index);
        data.splice(index,1,{id,name,fname});
        const input={id:0,name:"",fname:""};
        this.setState({data,input});
        
    };
    handleDelete = (id)=>{
        const data = this.state.data.filter(item=>item.id!==id);
        this.setState({ data });
    };
    handleUpdate = (id)=>{
        //console.log("update");
        const input = {...this.state.input};
        //console.log(input);
        const data = this.state.data.filter(item=>item.id===id);
        //console.log(data);
        input.id = data[0].id;
        input.name = data[0].name;
        input.fname = data[0].fname;
        this.setState({input});
    };
    
    handleChange = (e)=>{
        const input = {...this.state.input};
        //const fname=this.state.fname;
        input[e.currentTarget.name] = e.currentTarget.value;
        this.setState({input});
    };
    render() { 
        return ( 
            <React.Fragment>
                
                <div className="row">
                    <div className="col-sm-1"></div>
                    <div className="col-sm-9">
                    <h1 className="text text-info">Form Data</h1>
                        <form onSubmit={this.state.input.id===0?this.handleSubmit:this.handleUpdateSubmit}>
                            <input
                            onChange={this.handleChange}
                            value={this.state.input.id} 
                            type="number" 
                            name="id" 
                            className="form-control"
                            hidden={true}
                            />
                            <div className="form-group">
                                <label>Name</label>
                                <input 
                                onChange={this.handleChange}
                                value={this.state.input.name} 
                                type="text" 
                                name="name" 
                                className="form-control" />
                            </div>
                            <div className="form-group">
                                <label>Father Name</label>
                                <input 
                                onChange={this.handleChange}
                                value={this.state.input.fname} 
                                type="text" 
                                name="fname" 
                                className="form-control" />
                            </div>
                            <button className="btn btn-success">{(this.state.input.id)>0?'Update':'Add'}</button>
                        </form>
                        <br/>
                        <table className="table table-bordered table-striped">
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Father Name</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {this.state.data.map(item=>(
                                        <tr key={item.id}>
                                             <td>{item.name}</td>
                                             <td>{item.fname}</td>
                                             <td>
                                             <button 
                                             onClick={()=>this.handleUpdate(item.id)} 
                                             className="btn btn-primary">Update</button>
                                                &nbsp;<button 
                                             onClick={()=>this.handleDelete(item.id)} 
                                             className="btn btn-danger">Delete</button>
                                             </td>
                                        </tr>
                                ))}
                                
                            </tbody>
                        </table>
                    </div>
                </div>
            </React.Fragment>
         );
    }
}
 
export default Form;