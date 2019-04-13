import React, {Component} from 'react';
import './Header.css';
import Large from "../../Headings/Large";
import {faTimes} from '@fortawesome/free-solid-svg-icons'
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import getHistory from './../../../history';
import {connect} from "react-redux";
import { modalAnimation } from "../../../redux/actions/showModalAnimationAction.js";

class Header extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    goBack() {
        this.props.modalAnimation(this.props.modalAnimateExitClass + " exit-modal");
        setTimeout(() => {
            getHistory().goBack();
            this.props.modalAnimation("modal");
        }, 700);
    };

    render() {
        return (
            <div className="modal-header">
                <Large text={this.props.title}/>
                <a className="modal-exit">
                    <FontAwesomeIcon onClick={this.goBack} icon={faTimes}/>
                </a>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Modal: state.modal.modalAnimation,
});

export default connect(mapStateToProps, {modalAnimation})(Header);