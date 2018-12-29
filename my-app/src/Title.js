import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Title extends Component {
    static contextTypes = {
        store: PropTypes.object
    }
    render() {
        return (
            <div style={{color: this.context.store.getState().color}}>我是文章的标题</div>
        );
    }
}

export default Title;