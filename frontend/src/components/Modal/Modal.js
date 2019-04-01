import React, { Component } from 'react';
import Header from "./Header/Header";
import Footer from "./Footer/Footer";
import Body from "./Body/Body";

class Modal extends Component {
    render() {
        return (
            <div>
                <div className="modal">
                    <Header title={this.props.title}/>

                   <Body/>

                    <Footer/>
                </div>

                <div className="modal-overlay">

                </div>
            </div>
        );
    }
}