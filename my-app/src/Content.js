import React, { Component } from 'react';
import ChildContent from './ChildContent';
import PropTypes from 'prop-types';
import {connect} from './redux/connect';

class Content extends Component {
  static propTypes = {
    store: PropTypes.object
  }
  render() {
    return (
      <div>
          <span 
            style={{color: this.props.store.getState().color}}>
              主内容区域
          </span>
          <br/>
          <ChildContent></ChildContent>
      </div>
    );
  }
}

let ContentComp = connect(Content);
export default ContentComp;
