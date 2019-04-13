import React, { Component } from 'react';
import {Link} from "react-router-dom";
import './Item.css';

export default class Item extends Component{
    render() {
        return(
            <li className={this.props.classes ? this.props.classes + ' nav--item' : 'nav--item'}>
                <Link to={this.props.toPath}>{this.props.children}</Link>
            </li>
        );
    }
}