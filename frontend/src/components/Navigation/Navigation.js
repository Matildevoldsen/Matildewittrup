import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faBars, faHome, faUser, faToolbox, faLock, faUserPlus, faLockOpen} from '@fortawesome/free-solid-svg-icons'

import * as ROUTES from '../../constants/routes';

class Navigation extends Component {
    constructor(e) {
        super(e);

        this.state = {isVisible: false};
        this.onItemClick = this.onItemClick.bind(this);
    }
    onItemClick(e) {
        if (this.state.isVisible === true)
            this.setState({isVisible: false});
        else
            this.setState({isVisible: true});
    }

    render() {
        return (
            <nav className="navbar" id="nav">
                <Link className="nav--logo" to={ROUTES.HOME}>{process.env.REACT_APP_NAME}</Link>
                <ul className={this.state.isVisible ? 'navbar--container' : 'navbar--container navbar--hidden'}>
                    <li className="nav--item">
                        <Link to={ROUTES.HOME}><FontAwesomeIcon icon={faHome}/> Home</Link>
                    </li>
                    <li className="nav--item">
                        <Link to={ROUTES.ACCOUNT}><FontAwesomeIcon icon={faUser}/> Account</Link>
                    </li>
                    <li className="nav--item">
                        <Link to={ROUTES.ADMIN}><FontAwesomeIcon icon={faToolbox}/> Admin</Link>
                    </li>
                    <li className="nav--item nav--right lock">
                        <Link to={ROUTES.SIGN_IN}><FontAwesomeIcon className="icon-unlock" icon={faLock}/> <FontAwesomeIcon className="icon-lock" icon={faLockOpen}/> Sign In</Link>
                    </li>
                    <li className="nav--item nav--right">
                        <Link to={ROUTES.SIGN_UP}><FontAwesomeIcon icon={faUserPlus}/> Sign Up</Link>
                    </li>
                </ul>

                <a href="#" className="navbar--collapse" onClick={this.onItemClick}>
                    <FontAwesomeIcon icon={faBars}/>
                </a>
            </nav>
        );
    }
}

export default Navigation;