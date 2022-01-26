import React,{ useEffect, useState} from 'react';

function Users() {

    const [count , setCount] = useState(0)
   
    useEffect(() => {
        console.log(count);
    }, [count ===5]);
 
  return(
  <div>
      <h1>Use the Effects Of hooks</h1>
      <button onClick={() => setCount(count+1)}> Update </button>
  </div>
  );
};

export default Users;