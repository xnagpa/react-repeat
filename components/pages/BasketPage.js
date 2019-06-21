import React, { Component, Fragment } from 'react';
import Basket from '~/components/Basket';
import BasketContext from '~/components/BasketContext';

class BasketPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Fragment>
        <BasketContext.Consumer>
          {
            (data) => {
              return <Basket count={data.productsCount} basket={data.basket}/>
            }
          }
        </BasketContext.Consumer>
      </Fragment>
    );
  }
}

export default BasketPage;

