import React,{useState,useEffect} from 'react';
import axios from 'axios';
const Users = (props) => {
    const [users,setUsers] = useState([]);
    useEffect(()=>{
      const getUsers= async ()=>{
        const result = await axios('https://jsonplaceholder.typicode.com/users');
        setUsers(result.data);
      };
      getUsers();

    });
    return ( 
        <div className="container">
            <table className="table table-bordered table-striped">
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Username</th>
                        <th>Email</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user)=>{
                      return (
                      <tr key={user.id}>
                        <td>{user.id}</td>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                    </tr>
                    ); 
                    })}
                </tbody>
            </table>
        </div>
     );
}
 
export default Users;