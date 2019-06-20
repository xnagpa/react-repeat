import React, { Component } from 'react';
import BasketContext from '~/components/BasketContext';
import AppContainer from '~/components/AppContainer';

class CartContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          productsCount: 0,
          basket: []
        };
      this.increaseTotalCount = this.increaseTotalCount.bind(this);
      this.addProductToBasket = this.addProductToBasket.bind(this);
    }

    increaseTotalCount(step) {
      step = parseInt(step, 10);
      this.setState((prevState) => {
        return Object.assign(prevState, { productsCount: prevState.productsCount + step});
      });
    }

    addProductToBasket(product, step) {
      step = parseInt(step, 10);
      const basket = this.state.basket;
      const element = basket.find((el) => el.id === product.id);
      if(element) {
        const index = basket.indexOf(element);
        basket[index].count = basket[index].count + step;
      } else {
        product.count = step;
        basket.push(product)
      }

      this.setState((prevState) => {
        return Object.assign(prevState, { basket: basket});
      });
    }

    render() {
      return (
        <div className='application'>
          <BasketContext.Provider value={{
              productsCount: this.state.productsCount,
              increaseTotalCount: this.increaseTotalCount,
              addProductToBasket: this.addProductToBasket,
              basket: this.state.basket
            }}>
            <AppContainer />
          </BasketContext.Provider>
        </div>
      )
    }
  }

export default CartContainer;