import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import './Modal.css';
import {connect} from "react-redux";
import { modalAnimation } from "../../redux/actions/showModalAnimationAction.js";

class Modal extends Component {
    runModalAnimation() {
        setTimeout(() => {
            this.props.modalAnimation("modal");
        }, 250)
    }

    componentDidMount() {
        this.props.modalAnimation(this.props.modalAnimateClass);
        this.runModalAnimation();
    }

    render() {
        return (
            <div>
                <div className="modal-overlay">
                    <div className={this.props.Modal} id="modal">
                        <Header title={this.props.title}/>

                        <Body/>

                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    Modal: state.modal.modalAnimation,
});

export default connect(mapStateToProps, {modalAnimation})(Modal);