import React, { Component } from 'react'
import logo from './logo.svg';
import './App.css';
class App extends Component {

  constructor() {
    super();
    this.state = {
      data: "subhan"
    }
  }
  apple() {
    this.setState({ date: this.state })
  }
  render() {
    return (
      <div className="App">
        <h1>{this.state.data}</h1>
        <button onClick={() => this.apple()}>update Data</button>
      </div>
    );
  }
}


// function App() {
//   const[data,setData]=useState("Abdul")
//   function updateData()
//   {
//     setData("subhan")
//   }

// let data="Subhan";
// function updateData()
// {
//   data="Subhan";
//   alert(data)
// }
//   return (
//     <div className='App'>
//       <h1>{data}</h1>
//       <button onClick={updateData}>Update data</button>
//     </div>
//   );
// }
// import {User} from './User'
// function App() {
//     //  </NameList>
//   var data="Abdul subhan";
//   function subhan()
//   {
//     alert("This user is invalid");

//   }
//   return(
//      <div className="App">
//        <h1>Name : Abdul subhan</h1>
//        <h2>Class: Bs software Engineer</h2>
//        <li>Email : mian8799@gmail.com</li>
//        <li>Age : 20</li>
//        <li>React component : Function component</li>
//       <button onClick={subhan}>Click Me</button>
//      </div>
//   );
// 

export default App;