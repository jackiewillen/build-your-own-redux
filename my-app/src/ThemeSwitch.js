import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {UPDATE_THEME} from './redux/actions';
import {connect} from './redux/connect';

class ThemeSwitch extends Component {
    static propTypes = {
        store: PropTypes.object,
    }
    render() {
        return (
            <div>
                <button 
                    style={{color: this.props.themeColor}} 
                    onClick={() => {this.props.store.dispatch({type: UPDATE_THEME, color: 'red'})}}>
                        红色主题
                </button>
                <button
                    style={{color: this.props.themeColor}} 
                    onClick={() => {this.props.store.dispatch({type: UPDATE_THEME, color: 'blue'})}}>
                        蓝色主题
                </button>
            </div>
        );
    }
}
let mapStateToProps = (state) => {
    return {
        themeColor: state.color,
    }
}
let ThemeSwitchComp = connect(mapStateToProps)(ThemeSwitch);

export default ThemeSwitchComp;