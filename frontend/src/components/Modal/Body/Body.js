import React, {Component} from 'react';
import './Body.css';

class Body extends Component {
    render() {
        return (
            <div className="modal-body">
                {this.props.children}
            </div>
        );
    }
}

export default Body;