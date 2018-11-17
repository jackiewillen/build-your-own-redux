import React, { Component } from 'react';
import Title from './Title';

class Header extends Component {
    render() {
        return (
            <Title color={this.props.color}></Title>
        )
    }
}

export default Header;