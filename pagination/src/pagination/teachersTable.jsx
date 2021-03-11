import React, {Component} from 'react';
import {Link} from 'react-router-dom';
class TeacherTable extends Component {
    raiseSort = path =>{
        const sortColumn = {...this.props.sortColumn};
         if(sortColumn.path===path){
             sortColumn.order = (sortColumn.order === 'asc') ? 'desc':'asc';
         }
         else{
             sortColumn.path = path;
             sortColumn.order = 'asc';
         }
         this.props.onSort(sortColumn);
    };
    icon = path => {
     if(this.props.sortColumn.path===path)
        return this.props.sortColumn.order === 'asc' ? <i className="fa fa-sort-asc"></i> : <i className="fa fa-sort-desc"></i>;
     
    };
    
    render() { 
        const {teachers , onDelete } = this.props;
        return ( 
            <React.Fragment>
                <h1 align="center" className="text text-info">Teachers Record</h1>
                    <Link to="/teacher/new" className="btn btn-info">Add New</Link><br/><br/>
                    <table className="table table-bordered table-stripped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th role="button" onClick={()=>this.raiseSort('name')}>Teacher Name {this.icon('name')}</th>
                                <th role="button" onClick={()=>this.raiseSort('dept.name')}>Department {this.icon('dept.name')}</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {teachers.map(teacher=>(
                                <tr key={teacher.id}>
                                    <td>{teacher.id}</td>
                                    <td>{teacher.name}</td>
                                    <td>{teacher.dept.name}</td>
                                    <td><button className="btn btn-danger" onClick={()=> onDelete(teacher.id)}><span className="fa fa-trash"></span></button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
            </React.Fragment>
         );
    }
}

 
export default TeacherTable;