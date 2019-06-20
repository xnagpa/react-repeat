import React, { Component } from 'react';
import Basket from '~/components/Basket';
import BasketContext from '~/components/BasketContext';
import CatalogPage from '~/components/CatalogPage';
import { Products } from '~/constants/Products';

class AppContainer extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div className='application'>
          <BasketContext.Consumer>
            {
              (data) => {
                return <Basket count={data.productsCount} basket={data.basket}/>
              }
            }
          </BasketContext.Consumer>
          <CatalogPage products={Products}/>
        </div>
      );
    }
  }

export default AppContainer;