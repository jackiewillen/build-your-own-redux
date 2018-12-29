import React,{Component} from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import Content from './Content';
import PropTypes from 'prop-types';
import createStore from './redux/store';
import reducer from './redux/reducer';

const store = new createStore(reducer);
class Index extends Component {
    static childContextTypes = { // 定义父子组件共享的变量
        store: PropTypes.object,
    }
    getChildContext () {
        return {
          store
        }
    }
    componentWillMount() {
        store.subscribe(() => this.updateComponent());
    }
    updateComponent() {
        // 每次store数据更新后重新渲染一下页面
        this.setState({color: store.getState().color});
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
