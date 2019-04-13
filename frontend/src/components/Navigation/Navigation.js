import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import './Navbar.css';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faBars, faLock, faUser, faUserPlus, faHome, faToolbox, faLockOpen} from '@fortawesome/free-solid-svg-icons';
import Item from './Item/Item';
import * as ROUTES from '../../constants/routes';
import {connect} from "react-redux";
import { showNav } from "../../redux/actions/showNavAction.js";

class Navigation extends Component {
    constructor(props) {
        super(props);

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick() {
        const condition = !this.props.Nav;
        this.props.showNav(condition);
    }

    render() {
        return (
            <nav className="navbar" id="nav">
                <Link className="nav--logo" to={ROUTES.HOME}>{process.env.REACT_APP_NAME}</Link>
                <ul className={this.props.Nav ? 'navbar--container' : 'navbar--container navbar--hidden'}>
                    <Item toPath={ROUTES.HOME}>
                        <FontAwesomeIcon icon={faHome}/> Home
                    </Item>

                    <Item toPath={ROUTES.ACCOUNT}>
                        <FontAwesomeIcon icon={faUser}/> Account
                    </Item>

                    <Item toPath={ROUTES.ACCOUNT}>
                        <FontAwesomeIcon icon={faToolbox}/> Admin
                    </Item>

                    <Item toPath={ROUTES.SIGN_IN} classes="nav--right lock">
                        <FontAwesomeIcon className="icon-unlock" icon={faLock}/> <FontAwesomeIcon className="icon-lock"
                                                                                                  icon={faLockOpen}/> Sign
                        In
                    </Item>

                    <Item toPath={ROUTES.SIGN_UP} classes="nav--right">
                        <FontAwesomeIcon icon={faUserPlus}/> Sign Up
                    </Item>
                </ul>

                <a href="#" className="navbar--collapse" onClick={this.onItemClick}>
                    <FontAwesomeIcon icon={faBars}/>
                </a>
            </nav>
        );
    }
}

const mapStateToProps = state => ({
    Nav: state.nav.menu,
});

export default connect(mapStateToProps, {showNav})(Navigation);