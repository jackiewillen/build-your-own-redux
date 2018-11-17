import React, { Component } from 'react';
import ChildContent from './ChildContent';

class Content extends Component {
  render() {
    return (
      <div>
          <span 
            color={this.props.color} 
            style={{color: this.props.color}}>
              主内容区域
          </span>
          <br/>
          <ChildContent 
            switchColor={this.props.switchColor}
            color={this.props.color} 
            ></ChildContent>
      </div>
    );
  }
}

export default Content;
