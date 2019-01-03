import React, { Component } from 'react';
import ChildContent from './ChildContent';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';

class Content extends Component {
  static propTypes = {
    store: PropTypes.object
  }
  render() {
    return (
      <div>
          <span 
            style={{color: this.props.themeColor}}>
              主内容区域
          </span>
          <br/>
          <ChildContent></ChildContent>
      </div>
    );
  }
}
let mapStateToProps = (state) => {
  return {
      themeColor: state.color,
  }
}

let ContentComp = connect(mapStateToProps)(Content);
export default ContentComp;
