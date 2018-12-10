import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {
    static contextTypes = {
        color: PropTypes.string,
        changeTheme: PropTypes.func,
    }
    render() {
        return (
            <div>
                <button 
                    style={{color: this.context.color}} 
                    onClick={() => {console.log('red');this.context.changeTheme('red')}}>
                        红色主题
                </button>
                <button 
                    style={{color: this.context.color}} 
                    onClick={() => {console.log('blue');this.context.changeTheme('blue')}}>
                        蓝色主题
                </button>
            </div>
        );
    }
}

export default ThemeSwitch;