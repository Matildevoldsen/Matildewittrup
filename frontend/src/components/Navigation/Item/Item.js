import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Item.css';
import {connect} from "react-redux";
import { showNav } from "../../../redux/actions/showNavAction.js";


class Item extends Component{
    constructor(props) {
        super(props)

        this.onItemClick = this.onItemClick.bind(this);
    }

    onItemClick() {
        const condition = !this.props.Nav;
        this.props.showNav(condition);
    }

    render() {
        return(
            <li onClick={this.onItemClick} className={this.props.classes ? this.props.classes + ' nav--item' : 'nav--item'}>
                <Link to={this.props.toPath}>{this.props.children}</Link>
            </li>
        );
    }
}

const mapStateToProps = state => ({
    Nav: state.nav.menu,
});

export default connect(mapStateToProps, {showNav})(Item);