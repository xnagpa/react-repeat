import React, { Component, Fragment } from 'react';
import BasketContext from '~/components/BasketContext';

class AddToBasket extends Component {
    constructor(props) {
      super(props);
      this.handleClick = this.handleClick.bind(this);
      this.state = { step: 1 };
      this.onChange = this.onChange.bind(this);
    }

    handleClick(context, step) {
      context.increaseTotalCount(step);
      context.addProductToBasket(this.props.product, step);
    }

    onChange(e) {
      this.setState({step: e.target.value});
    }

    render() {
      return(
        <BasketContext.Consumer>
          {(context) => {
            return (
            <Fragment>
              <button onClick={(e) => this.handleClick(context, this.state.step)} className='add-to-basket'>Добавить в корзину</button>
              <label>Count</label>
              <input className='js-items-count' onChange = { this.onChange } value = { this.state.step }/>
            </Fragment>
            )
          }}
        </BasketContext.Consumer>
      );
    }
  }

export default AddToBasket;