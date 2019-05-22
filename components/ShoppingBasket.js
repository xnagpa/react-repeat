import React, { Component } from 'react';

class ShoppingBasket extends Component {
    constructor(props) {
      super(props);
      this.state = { counter: 0 };
      this.incrementProductsCount = this.incrementProductsCount.bind(this);
    }

    incrementProductsCount() {
      this.setState((oldState) => {
        return { counter: oldState.counter + 1 };
      });
    }

    render() {
      return(
        <div className='shopping-basket'>
          <span>{this.state.counter}</span>
        </div>
      );
    }
  }

export default ShoppingBasket;