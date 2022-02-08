// import React, { useState, useEffect } from 'react';

// function Token() {
//   const [count, setCount] = useState(0);
//   function current(){
//     setCount(count-1)}
//     localStorage.setItem('counter', count);
//   }
//   function update(){
//     setCount(count+1)
//     localStorage.setItem('counter', count);
//   }
//   useEffect(() => {
//     console.log(count)
    
//   }, [count])

// useEffect(()=>{
// const value = localStorage.getItem('counter');
// if(value){
// setCount(parseInt(value));
// }
// },[])

//   return (
//     <div className="App">
//       <h1 style={{ color: "#000000" }}>Token Number</h1>
//       {/* <div className='d-flex'> */}
//       <p style={{ color: '#000000' }} className='bg-light'>{count + 1}</p>
//       {/* <p style={{ color: '#000000' }} className='bg-light'>{count}</p> */}
//       {/* <p style={{ color: '#000000' }} className='bg-light'>{count - 1}</p> */}
//       {/* </div> */}
//       <button onClick={() => update()}>update</button>
//       <button onClick={() => current()}>Current</button>
//     </div>
//   );
// export default Token;