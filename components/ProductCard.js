import React, { Fragment, Component } from 'react';
import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';
import AddToBasket from '~/components/AddToBasket';
import BasketContext from '~/components/BasketContext';

class ProductCard extends Component {
    constructor(props) {
      super(props);
    }
    // Мне пришлось пробросить сюда контекст родительского компонента
    // Это норм или говно?
    // См 26 строчку.
    render() {
      return(
        <div className='product-card'>
          <TextBox text={this.props.text}/>
          <Image src={this.props.src} width={this.props.width}/>
          <Price amount={this.props.price}/>
          <AddToBasket product={this.props.product}/>
        </div>
      );
    }
  }

export default ProductCard;