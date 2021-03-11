import React from 'react';
const ListGroup = props => {
    const {dept,onDeptSelect,selectedDept} = props;
    return ( 
        <ul className="list-group">
        {dept.map(dept=>(
            <li role="button" onClick={()=>onDeptSelect(dept)} key={dept.id} className={dept===selectedDept?"list-group-item active":"list-group-item"}>{dept.name}</li>
        ))}
        </ul>
     );
}
 
export default ListGroup;