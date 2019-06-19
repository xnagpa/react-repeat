import React, { Component } from 'react';
import Basket from '~/components/Basket';
import BasketContext from '~/components/BasketContext';
import CatalogPage from '~/components/CatalogPage';
import { Products } from '~/constants/Products';

class AppContainer extends Component {
    constructor(props) {
      super(props);
      this.state = {
          productsCount: 0,
          basket: []
        };
      this.increaseTotalCount = this.increaseTotalCount.bind(this);
      this.addProductToBasket = this.addProductToBasket.bind(this);
    }

    increaseTotalCount(value) {
      this.setState((prevState) => {
        return Object.assign(prevState, { productsCount: prevState.productsCount + value});
      });
    }

    addProductToBasket(product, value) {
      const basket = this.state.basket;
      const element = basket.find((el) => el.id === product.id);
      if(element) {
        const index = basket.indexOf(element);
        basket[index].count = basket[index].count + value;
      } else {
        product.count = value;
        basket.push(product)
      }

      this.setState((prevState) => {
        return Object.assign(prevState, { basket: basket});
      });
    }

    render() {
      return(
        <div className='application'>
          <BasketContext.Provider value={{
              productsCount: this.state.productsCount,
              increaseTotalCount: this.increaseTotalCount,
              addProductToBasket: this.addProductToBasket,
              basket: this.state.basket
            }}>
            <BasketContext.Consumer>
              {
                (data) => {
                  return <Basket count={data.productsCount} basket={data.basket}/>
                }
              }
            </BasketContext.Consumer>
            <CatalogPage products={Products}/>
          </BasketContext.Provider>
        </div>
      );
    }
  }

export default AppContainer;