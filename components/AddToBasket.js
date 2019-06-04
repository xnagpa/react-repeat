import React, { Component } from 'react';
import BasketContext from '~/components/BasketContext';

class AddToBasket extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <button onClick={this.props.handler} className='add-to-basket'>Добавить в корзину</button>
      );
    }
  }

export default AddToBasket;