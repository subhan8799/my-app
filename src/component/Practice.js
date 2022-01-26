
import React, {useState, useMemo } from 'react'
function Practice() {
  const[count, setCount] = useState(0);
  const[item, setItem] = useState(10);

  const multiCountMemo = useMemo(function multiCount() {
    console.log("multiCount")
    return count * 5
  }, [count])
  return (
    <div className='App'>
      <h1>UseMemo Is React</h1>
      <h2>Count: {count}</h2>
      <h2>Item: {item}</h2>
      <h2>{multiCountMemo}</h2>
      <button onClick={() => setCount(count + 1)}>Update Count</button>
      <button onClick={() => setItem(item * 10)}>update Item</button>
    </div>
  );
}
export default Practice;