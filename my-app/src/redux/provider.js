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
    render() {
        return this.props.children;
    }
}
export default Provider;
