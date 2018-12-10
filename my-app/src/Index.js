import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';

class Index extends Component {
    constructor() {
        super();
        this.state = {color: 'red'};
    }
    static childContextTypes = { // 定义父子组件共享的变量
        color: PropTypes.string,
        changeTheme: PropTypes.func,
    }
    getChildContext () {
        return {
          color: this.state.color,
          changeTheme: this.changeTheme,
        }
    }
    changeTheme = (color) => {
        this.setState({
            color
        });
    }
    render () {
        return (
            <div>
                <Header></Header>
                <Content></Content>
            </div>
        );
    }
}


ReactDOM.render(<Index />, document.getElementById('root'));
