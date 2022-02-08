import React from 'react'
import { Link, Route, Switch } from 'react-router-dom'
import Nav from './Nav'
import Home from '../Home';
// import About from './About';
import App from '../App';
import { BrowserRouter } from 'react-router-dom/cjs/react-router-dom.min';
function Router() {
    return (
        <div className="App">

            <BrowserRouter>
            <Nav />
                <Switch>
                    <Route path="/" exact ><Home/></Route>
                    <Route path="/about" exact>About</Route>
                    <Route path="/List" exact>List</Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default Router;