import React, { Component, Fragment } from 'react';
import BasketContext from '~/components/BasketContext';

class AddToBasket extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e, context) {
      const input = e.target.nextElementSibling.nextElementSibling;
      const value = parseInt( input.value, 10);
      context.increaseTotalCount(value);
      context.addProductToBasket(this.props.product, value);
    }

    render() {
      return(
        <BasketContext.Consumer>
          {(context) => {
            return (
            <Fragment>
              <button onClick={(e) => this.handleClick(e, context)} className='add-to-basket'>Добавить в корзину</button>
              <label>Count</label>
              <input className='js-items-count' defaultValue='1'/>
            </Fragment>
            )
          }}
        </BasketContext.Consumer>
      );
    }
  }

export default AddToBasket;