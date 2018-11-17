import React, { Component } from 'react';

class Title extends Component {
    render() {
        return (
            <div style={{color: this.props.color}}>我是文章的标题</div>
        );
    }
}

export default Title;