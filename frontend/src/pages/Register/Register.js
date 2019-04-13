import React, { Component } from 'react';
import Modal from './../../components/Modal/Modal';


class Register extends Component{
    render() {
        return(
            <div>
                <Modal title="Register" modalAnimateClass="modal-animate-up" modalAnimateExitClass="modal modal-animate-down" />
            </div>
        );
    }
}

export default Register;