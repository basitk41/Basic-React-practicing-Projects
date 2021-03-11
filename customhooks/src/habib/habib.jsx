import React, { Component } from 'react'
class Habib extends Component {
    state = { 
        data:[
            {id:1,name:'Habib',fname:'Khan'},
            {id:2,name:'Basit',fname:'Ali'},
            {id:3,name:'Mubashir',fname:'Jan'},
        ]
     }
     handleDelete = (id)=>{
         const data=this.state.data.filter((b)=>b.id!==id);
            this.setState({data});
     };
    render() { 
        return ( 
            <table className="table">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>NAME</th>
                        <th>FATHER NAME</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {this.state.data.map((a)=>{
                        return (<tr key={a.id}>
                            <td>{a.id}</td>
                            <td>{a.name}</td>
                            <td>{a.fname}</td>
                            <td><button onClick={()=>this.handleDelete(a.id)} className="btn btn-danger">Delete</button></td>
                        </tr>)
                    })}
                </tbody>
            </table>
         );
    }
}
 
export default Habib;