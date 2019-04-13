import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import './Modal.css';
import {connect} from "react-redux";
import { modalAnimation } from "../../redux/actions/showModalAnimationAction.js";
import getHistory from "../../history";

class Modal extends Component {
    constructor(props) {
        super(props);

        this.goBack = this.goBack.bind(this);
    }

    runModalAnimation() {
        setTimeout(() => {
            this.props.modalAnimation("modal");
        }, 250)
    }

    componentDidMount() {
        this.props.modalAnimation(this.props.modalAnimateClass);
        this.runModalAnimation();
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
            <div className="modal-container">
                <div className="modal-overlay" onClick={this.goBack}>
                </div>

                <div className={this.props.Modal} id="modal">
                    <Header modalAnimateExitClass={this.props.modalAnimateExitClass} title={this.props.title}/>

                    <Body/>

                    <Footer/>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Modal: state.modal.modalAnimation,
});

export default connect(mapStateToProps, {modalAnimation})(Modal);