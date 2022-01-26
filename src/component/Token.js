import React, { useState, useEffect } from 'react';

function Token() {
  const [count, setCount] = useState(0)
  useEffect(() => {
    console.log(count)
  }, [count])
  return (
    <div className="App">
      <h1 style={{ color: "#000000" }}>Token Number</h1>
      {/* <div className='d-flex'> */}
      <p style={{ color: '#000000' }} className='bg-light'>{count + 1}</p>
      {/* <p style={{ color: '#000000' }} className='bg-light'>{count}</p> */}
      {/* <p style={{ color: '#000000' }} className='bg-light'>{count - 1}</p> */}
      {/* </div> */}
      <button onClick={() => setCount(count + 1)}>update</button>
      <button onClick={() => setCount(count - 1)}>Current</button>
    </div>
  );
}
export default Token;