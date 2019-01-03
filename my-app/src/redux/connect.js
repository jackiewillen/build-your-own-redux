import React, {Component} from 'react';
import PropTypes from 'prop-types';

let connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => (WrappedComponent) => {
    class connect extends Component {
        static contextTypes = {
            store: PropTypes.object,
        }
        constructor() {
            super();
            this.state = {};
        }
        componentWillMount() {
            this.updateComponent();
            this.context.store.subscribe(() => this.updateComponent());
        }
        updateComponent() {
            let store = this.context.store;
            let stateProps = mapStateToProps(store.getState());
            let dispatchProps = mapDispatchToProps(store.dispatch);
            // 每次store数据更新后重新渲染一下页面
            this.setState({allProps: {...stateProps, ...dispatchProps}});
        }
        render() {
            return <WrappedComponent {...this.state.allProps} />   
        }
    }
    return connect;
}
export {
    connect
}