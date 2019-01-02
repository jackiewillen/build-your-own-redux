import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {connect} from './redux/connect';

class Title extends Component {
    static propTypes = {
        store: PropTypes.object
    }
    render() {
        return (
            <div style={{color: this.props.store.getState().color}}>我是文章的标题</div>
        );
    }
}
let TitleComp = connect(Title);

export default TitleComp;