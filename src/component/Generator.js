// import React, { useState } from 'react';
// import Button from './Button';
// import Head from './Head';

// const Generator = () => {
//     const storage = localStorage.getItem('counter')
//     const count2Storage = localStorage.getItem('count2')
//     const [count, setCount] = useState(parseInt(storage) || 0);
//     const [count2, setCount2] = useState(parseInt(count2Storage) || 0);
//     const [isTrue, setIsTrue] = useState(false);
//     const [section, setSection] = useState('');
//     console.log(count)

//     function update() {
//         localStorage.setItem('counter', count + 1);
//         setCount(count + 1)
//     }
//     function system() {
//         localStorage.setItem('count2', count2 + 1);
//         // localStorage.setItem('counter', count2 + 1);

//         setCount2(count2 + 1)
//     }
//     return (
//         <>
//             {isTrue ? <><Button update={update} system={system} section={section} setIsTrue={setIsTrue} count={count} count2={count2} /></>
//                 : <><Head setIsTrue={setIsTrue} setSection={setSection} isTrue={isTrue} /></>
//             }
//         </>
//     );
// };
// export default Generator;