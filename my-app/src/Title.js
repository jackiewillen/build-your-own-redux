import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    static contextTypes = {
        color: PropTypes.string
    }
    render() {
        return (
            <div style={{color: this.context.color}}>我是文章的标题</div>
        );
    }
}

export default Title;