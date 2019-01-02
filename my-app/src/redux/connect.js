import React, {Component} from 'react';
import PropTypes from 'prop-types';

let connect = (WrappedComponent) => {
    class connect extends Component {
        static contextTypes = {
            store: PropTypes.object,
        }
        componentWillMount() {
            this.store = this.context.store;
        }
        render() {
            return <WrappedComponent store = {this.store}></WrappedComponent>   
        }
    }
    return connect;
}
export {
    connect
}