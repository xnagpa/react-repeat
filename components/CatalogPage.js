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
    // Эдуард,
    // Мне пришлось вынести инкремент из Basket
    // На мой взгляд инкремент Basket должен быть все же в Basket
    // но я не знаю КАК это сделать
    increaseCounter(e) {      
      // говнокод. Есть способ достать ближайшего сиблинга по селектору без сторонних библиотек?
      const input = e.target.nextElementSibling.nextElementSibling;
      this.setState((prevState) => {
        return { count: prevState.count + parseInt( input.value, 10)}
      });
    }

    render() {
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