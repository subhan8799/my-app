import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
    return (
        <div>
            <Link to="/home">Home page</Link>
            <br></br>
            <Link to="/about">About page</Link>
            <br></br>
            <Link to="/list">List page</Link>
        </div>

    )
}

export default Nav;