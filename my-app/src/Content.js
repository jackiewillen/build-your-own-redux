import React, { Component } from 'react';
import ChildContent from './ChildContent';
import PropTypes from 'prop-types';

class Content extends Component {
  static contextTypes = {
    color: PropTypes.string
  }
  render() {
    return (
      <div>
          <span 
            style={{color: this.context.color}}>
              主内容区域
          </span>
          <br/>
          <ChildContent></ChildContent>
      </div>
    );
  }
}

export default Content;
