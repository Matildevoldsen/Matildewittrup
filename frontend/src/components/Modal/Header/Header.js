import React, {Component} from 'react';
import './Header.css';
import Large from "../../Headings/Large";
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

class Header extends Component {
    render() {
        return (
            <div className="modal-header">
                <Large text={this.props.title}/>
                <a className="modal-exit">
                    <FontAwesomeIcon icon={faTimes}/>
                </a>
            </div>
        );
    }
}

export default Header;