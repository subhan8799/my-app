// import { useState } from "react";
// function Button(props) {

//     return (
//         <>
//             {
//                 props.section === 'serve' ?
//                     <div>
//                     <h1>Next Token</h1>
//                     <h2>{props.count>=props.count2?'None':props.count+1}</h2>
//                         <h1>Current Token</h1>
//                         <h2>{props.count}</h2>
//                         <button onClick={() => { props.update() }} disabled={props.count2==props.count}>Next</button>
//                         <button onClick={() => { props.setIsTrue(false) }} style={{ marginLeft: '10px' }}>Back</button>
//                     </div>
//                     : props.section === 'generator' ?
//                         <div>
//                             <h1>Generate Token </h1>
//                             <h1>{props.count2}</h1>
//                             <button onClick={() => { props.system() }}>Gernate New Token</button>
//                             <button onClick={() => { props.setIsTrue(false) }} style={{ marginLeft: '10px' }}>Back</button>
//                         </div>
//                         : null
//             }
//         </>

//     )
// }
// export default Button;