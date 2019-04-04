import React, { Component } from 'react';
import './Large.css';

export default class Large extends Component {
    render() {
        return(
            <h2>{this.props.text}</h2>
        );
    }
}