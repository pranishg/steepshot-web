import React, { Component } from 'react';

class ErrorInfo extends Component {
  
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="help-block">
        {
          this.props.show && this.props.children
            ?
              <div className="help-block__notice">{this.props.children}</div>
            :
              null
        }
      </div>
    )
  }
}

ErrorInfo.defaultProps  = {
  show: true
};


export default ErrorInfo;
