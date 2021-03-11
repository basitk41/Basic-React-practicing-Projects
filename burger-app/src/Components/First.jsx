import React from 'react';
const First = ({name,age,click,handleChange,children}) => {
    return ( 
        <div>
            <h2 onClick={click}>Hi, I am {name}. My age is {age}.</h2>
            <p>{children}</p>
            <input type="text" onChange={handleChange} value={name} name={name} />
        </div>
     );
}
 
export default First;