import React,{useState} from 'react';
import useDocumentTitle from './useDocumentTitle';
function Hooks(props){
    const [count, setCount] = useState(0);
    const [name, setName] = useState('');
    useDocumentTitle(`${name} clicked ${count} times`);
    return ( 
        <div>
            <h1>My Name is {name}</h1>
            <h2>Counter:{count}</h2>
            <button onClick={()=>setCount(count+1)} className="btn btn-primary">Increment</button>
            <br/>
            <br/>
            <input type="text" onChange={(e)=>setName(e.target.value)}/>
        </div>
     );
}
 
export default Hooks;