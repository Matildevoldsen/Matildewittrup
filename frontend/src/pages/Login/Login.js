import React, { Component } from 'react';
import Modal from './../../components/Modal/Modal';

class Login extends Component{
    render() {
        return(
            <div>
                <Modal title="Login" modalAnimateClass="modal-animate-up" />
            </div>
        );
    }
}

export default Login;