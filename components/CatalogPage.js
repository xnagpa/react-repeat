import React, { Component } from 'react';
import Catalog from '~/components/Catalog';
import Basket from '~/components/Basket';
import BasketContext from '~/components/BasketContext';
import { Products } from '~/constants/Products';

class CatalogPage extends Component {
    constructor(props) {
      super(props);
      this.state = { count: 0 };
      this.increaseCounter = this.increaseCounter.bind(this);
    }

    // Мне пришлось вынести инкремент из Basket
    // На мой взгляд инкремент корзины должен быть все же корзине
    // но я не знаю КАК это сделать
    increaseCounter() {
      console.log('clicked');
      this.setState((prevState) => {
        return { count: prevState.count + 1}
      });
    }

    render() {
      console.log(Products);
      return(
        <div className='catalogPage'>
          <BasketContext.Provider value={{
              count: this.state.count,
              context: this,
              increase: this.increaseCounter
            }}>
            <BasketContext.Consumer>
              { 
                (data) => { 
                  console.log(data);
                  return <Basket count={data.count}/>
                } 
              }
            </BasketContext.Consumer>
            <Catalog products={Products}/>
          </BasketContext.Provider>
        </div>
      );
    }
  }

export default CatalogPage;