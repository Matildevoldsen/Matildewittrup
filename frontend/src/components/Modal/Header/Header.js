import React, {Component} from 'react';
import './Header.css';
import Large from "../../Headings/Large";

class Header extends Component {
    render() {
        return (
            <div className="modal-header">
                <Large text={this.props.title}/>
                <button className="modal-exit">X</button>
            </div>
        );
    }
}

export default Header;