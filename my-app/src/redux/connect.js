import React, {Component} from 'react';
import PropTypes from 'prop-types';

let connect = (mapStateToProps = () => {}) => (WrappedComponent) => {
    class connect extends Component {
        static contextTypes = {
            store: PropTypes.object,
        }
        render() {
            let store = this.context.store;
            let stateProps = mapStateToProps(store.getState());
            return <WrappedComponent {...stateProps}/>   
        }
    }
    return connect;
}
export {
    connect
}