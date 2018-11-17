import React from 'react';
import ThemeSwitch from './ThemeSwitch';

class ChildContent extends React.Component {
    render() {
        return (
            <ThemeSwitch
                color={this.props.color}
                switchColor={this.props.switchColor}></ThemeSwitch>
        )
    }
}

export default ChildContent