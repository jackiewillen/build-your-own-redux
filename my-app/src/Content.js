import React, { Component } from 'react';
import ChildContent from './ChildContent';
import PropTypes from 'prop-types';

class Content extends Component {
  static contextTypes = {
    store: PropTypes.object
  }
  render() {
    return (
      <div>
          <span 
            style={{color: this.context.store.getState().color}}>
              主内容区域
          </span>
          <br/>
          <ChildContent></ChildContent>
      </div>
    );
  }
}

export default Content;
