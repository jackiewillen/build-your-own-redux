import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Title extends Component {
    static propTypes = {
        store: PropTypes.object
    }
    render() {
        return (
            <div style={{color: this.props.themeColor}}>我是文章的标题</div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        themeColor: state.color,
    }
}
let TitleComp = connect(mapStateToProps)(Title);

export default TitleComp;