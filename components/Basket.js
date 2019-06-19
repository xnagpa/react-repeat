import React, { Component } from 'react';
import { throws } from 'assert';

class Basket extends Component {
  constructor(props) {
    super(props);
  }

  productsInBasket() {
    let products = []
    this.props.basket.forEach((product) => {
      products.push(<p>{ product.text }, <span>{ product.count }</span></p>)
    });

    return products;
  }

  render() {
    return(
      <div className='basket'>
        <h4>Товаров в корзине { this.props.count }</h4>
        { this.productsInBasket() }
      </div>
    );
  }
}

Basket.defaultProps = {
  value: 0
};

export default Basket;