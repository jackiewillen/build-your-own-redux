import React, {Component} from 'react';
import PropTypes from 'prop-types';

let connect = (mapStateToProps = () => {}, mapDispatchToProps = () => {}) => (WrappedComponent) => {
    class connect extends Component {
        static contextTypes = {
            store: PropTypes.object,
        }
        render() {
            let store = this.context.store;
            let stateProps = mapStateToProps(store.getState());
            let dispatchProps = mapDispatchToProps(store.dispatch)
            return <WrappedComponent {...stateProps} {...dispatchProps}/>   
        }
    }
    return connect;
}
export {
    connect
}