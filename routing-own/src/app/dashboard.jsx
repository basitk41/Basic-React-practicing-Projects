import React from 'react';
import { Route } from 'react-router-dom';
import AdminPanel from './admin-panel';
import Admin from './admin';
import Posts from './posts';
const Dashboard = () => {
    return ( 
        <React.Fragment>
            <h1>Dashboard</h1>
            <AdminPanel />
            <Route path="/dashboard/admin" component={Admin}/>
            <Route path="/dashboard/posts" component={Posts}/>
        </React.Fragment>
     );
}
 
export default Dashboard;
