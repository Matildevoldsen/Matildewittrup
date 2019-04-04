import React, {Component} from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";
import './Modal.css';

class Modal extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalClasses: 'modal ' + this.props.modalAnimateClass
        };

        this.runModalAnimation.bind();
    }

    runModalAnimation() {
        setTimeout(() => {
            this.setState({modalClasses: 'modal modal-animate'})
        }, 250)
    }

    componentDidMount() {
        this.runModalAnimation();
    }

    render() {
        return (
            <div>
                <div className="modal-overlay">
                    <div className={this.state.modalClasses} id="modal">
                        <Header title={this.props.title}/>

                        <Body/>

                        <Footer/>
                    </div>
                </div>
            </div>
        );
    }
}

export default Modal;