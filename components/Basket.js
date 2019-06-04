import React, { Component } from 'react';
import { throws } from 'assert';

class Basket extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='basket'>
        <h4>Товаров в корзине {this.props.count}</h4>
      </div>
    );
  }
}

Basket.defaultProps = {
  value: 0
};

export default Basket;