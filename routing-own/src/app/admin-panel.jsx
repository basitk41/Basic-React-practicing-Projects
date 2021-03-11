import React from 'react';
import {Link} from 'react-router-dom';
const AdminPanel = () => {
    return ( 
        <React.Fragment>
            <ul>
                <li>
                    <Link to="/dashboard/admin">Admin</Link>
                </li>
                <li>
                    <Link to="/dashboard/posts">Posts</Link>
                </li>
            </ul>
        </React.Fragment>
     );
}
 
export default AdminPanel;