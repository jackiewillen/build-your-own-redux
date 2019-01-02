import React from 'react';
import ThemeSwitch from './ThemeSwitch';
import {connect} from './redux/connect';

class ChildContent extends React.Component {
    render() {
        return (
            <ThemeSwitch></ThemeSwitch>
        )
    }
}

export default ChildContent