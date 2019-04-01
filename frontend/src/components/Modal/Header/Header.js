import React, {Component} from 'react';

const BrowserHistory = require('react-router/lib/BrowserHistory').default;

class Header extends Component {
    render() {
        return (
            <div className="modal-header">
                <h3>{this.props.title}</h3>
                <button className="modal-exit" onClick={BrowserHistory.goBack}>X</button>
            </div>
        );
    }
}

export default Header;