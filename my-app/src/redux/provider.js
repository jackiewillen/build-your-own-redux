import {Component} from 'react';
import PropTypes from 'prop-types';

class Provider extends Component {
    static propTypes = {
        store: PropTypes.object,
    }
    static childContextTypes = { // 定义父子组件共享的变量
        store: PropTypes.object,
    }
    getChildContext () {
        return {
          store: this.props.store
        }
    }
    componentWillMount() {
        this.props.store.subscribe(() => this.updateComponent());
    }
    updateComponent() {
        // 每次store数据更新后重新渲染一下页面
        this.setState({color: this.props.store.getState().color});
    }
    render() {
        return this.props.children;
    }
}
export default Provider;
