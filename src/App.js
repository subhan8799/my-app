import { useState, useEffect, useRef,Component } from "react";
import ReactDOM from "react-dom";
// import Practice from "./component/Practice";
import logo from './logo.svg';
import './App.css';
import {Table} from 'react-bootstrap'
// import Users from "./component/Users";
// import Hook from "./component/Hook";
// import Prop from "./Practice/Prop";
// import Conditional from "./Practice/Conditional";
// import Propclass from "./Practice/Propclass";
import Generator from "./component/Generator";
// import Token from "./component/Token";
function App() {
const students=[
  {name:"Abdul subhan", email:'mian@gmail.com', contact:1122},
  {name:"Awais akhtar", email:'awais@gmail.com', contact:2233},
  {name:"Abdul", email:'Abdul@gmail.com', contact:3422},
]
 return( 
   <div className="App">
     {/* <h1>Bootstrap Array with list</h1>
     <Table striped variant="dark" style={{margin: '0 auto'}}>
       <tbody>
     <tr>
         <td>Name</td>
         <td>Email</td>
         <td>Contact</td>
       </tr>
     {
       students.map((data,i)=>

       <tr key={i}>
         <td>{data.name}</td>
         <td>{data.email}</td>
         <td>{data.contact}</td>
       </tr>
       )
     } */}
       {/* </tbody>  */}
     {/* <Token /> */}
     {/* </Table> */}
     {/* <Practice/> */}
         {/* <Users /> */}
         {/* <Hook /> */}
         {/* <Conditional />   */}
         {/* <Prop name={"Abdul"} email="mian@gmail.com" />
         <Prop name={"Subhan"} email="mian@gmail.com"/>
         <Prop name={"Sajid"} email="mian@gmail.com"/> */}
         <Generator />
   </div>
 )
}
// class App extends Component {

//   constructor() {
//     super();
//     this.state = {
//       data: "Subhan"
//     }
//   }
//   apple() 
//   {
//     alert("This user is invalid")
//     this.setState({ data:"My names " })
//   }
//   render() {

//     return (
//       <div className="App">
//         <h1>{this.state.data}</h1>
//         <button onClick={() => this.apple()}>update Data</button>
//         <br></br>
//         <Practice/>
//         <Users />
//         <Hook />
//         <Conditional />  
//         <Prop name={"Abdul"} email="mian@gmail.com" />
//         <Prop name={"Subhan"} email="mian@gmail.com"/>
//         <Prop name={"Sajid"} email="mian@gmail.com"/>
//       </div>
//     );
//   }
// }

export default App;