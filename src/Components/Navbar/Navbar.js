import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Navbar.css';

class Navbar extends Component{
    render() {
        return(
            <nav className="navbar">
                <ul className="navbar--container">
                    <li className="nav--logo">
                        <Link to="/">{ this.props.title }</Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/" >Home</Link>
                    </li>
                    <li className="nav--item">
                        <a target="_blank" rel="noopener noreferrer" href={ this.props.courseLink } >Courses</a>
                    </li>
                    <li className="nav--item">
                        <Link to="/about-me" >About</Link>
                    </li>
                    <li className="nav--item">
                        <Link to="/contact" >Contact</Link>
                    </li>
                </ul>
            </nav>
        );
    }
}

export default Navbar;