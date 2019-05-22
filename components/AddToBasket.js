import React, { Component } from 'react';
class AddToBasket extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log(this.props);
      return(
        <button onClick={this.props.clickHandler}>Add to basket</button>
      );
    }
  }

export default AddToBasket;