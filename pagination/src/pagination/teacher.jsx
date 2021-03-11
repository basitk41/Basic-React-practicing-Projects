import React, { Component } from 'react';
import {getTeachers} from './teachers';
import Page from './page'; 
import { paginate } from '../util/pagination';
import ListGroup from './listGroup'
import {getDept} from './dept';
import TeacherTable from './teachersTable';
import _ from 'lodash';
class Teacher extends Component {
    state = { 
        teachers:[],
        pageSize:4,
        currentPage:1,
        dept:[],
        sortColumn:{path:'name',order:'asc'},
     }
     componentDidMount(){
          const dept = [{id:'',name:"All Departments"}, ...getDept()]
          this.setState({teachers:getTeachers(),dept});
     }
     handleDelete = id => {
         const teachers = this.state.teachers.filter(teacher=>teacher.id!==id);
         this.setState({teachers,currentPage:1});
     }
     handlePageChange = page =>{
         this.setState({currentPage:page});
     }
     handleDeptSelect = dept =>{
          this.setState({selectedDept:dept,currentPage:1});
     }
     handleSort = sortColumn =>{
         
         this.setState({sortColumn});

     }
    render() { 
        const { selectedDept } = this.state;
        const filtered = selectedDept && selectedDept.id ? this.state.teachers.filter(teacher=>teacher.dept.id===selectedDept.id):this.state.teachers;
        const sorted = _.orderBy(filtered,[this.state.sortColumn.path],[this.state.sortColumn.order]);
        const teachers = paginate(sorted,this.state.currentPage,this.state.pageSize); 
        return ( 
            <React.Fragment>
                <div className="row">
                    
                <div className="col-sm-3">
                <h1 align="center" className="text text-info">Groups</h1>
                <ListGroup 
                dept={this.state.dept} 
                onDeptSelect={this.handleDeptSelect} 
                selectedDept={this.state.selectedDept}
                 />
                </div>
                <div className="col-sm-9">
                <TeacherTable
                teachers={teachers}
                sortColumn={this.state.sortColumn}
                onDelete={this.handleDelete}
                onSort={this.handleSort}
                />
                <Page 
                teacherCount={filtered.length} 
                pageSize={this.state.pageSize} 
                onPageChange={this.handlePageChange}
                currentPage={this.state.currentPage}
                /> 
                </div>
                </div>
            </React.Fragment>
            
         );
    }
}
 
export default Teacher;