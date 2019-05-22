import React, { Component } from 'react';
class Price extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <span className='price'>{ this.props.amount }</span>
      );
    }
  }

export default Price;