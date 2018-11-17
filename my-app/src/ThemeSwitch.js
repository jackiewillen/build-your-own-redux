import React, { Component } from 'react';

class ThemeSwitch extends Component {
    render() {
        return (
            <div>
                <button 
                    style={{color: this.props.color}} 
                    onClick={() => this.props.switchColor('red')}>
                        红色主题
                </button>
                <button 
                    style={{color: this.props.color}} 
                    onClick={() => this.props.switchColor('blue')}>
                        蓝色主题
                </button>
            </div>
        );
    }
}

export default ThemeSwitch;