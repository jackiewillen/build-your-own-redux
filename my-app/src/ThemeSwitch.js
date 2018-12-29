import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {UPDATE_THEME} from './redux/actions';

class ThemeSwitch extends Component {
    static contextTypes = {
        store: PropTypes.object,
    }
    componentWillMount() {
        this.store = this.context.store;
    }
    render() {
        return (
            <div>
                <button 
                    style={{color: this.store.getState().color}} 
                    onClick={() => {this.store.dispatch({type: UPDATE_THEME, color: 'red'})}}>
                        红色主题
                </button>
                <button
                    style={{color: this.store.getState().color}} 
                    onClick={() => {this.store.dispatch({type: UPDATE_THEME, color: 'blue'})}}>
                        蓝色主题
                </button>
            </div>
        );
    }
}

export default ThemeSwitch;