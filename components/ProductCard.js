import React, { Component } from 'react';
import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';
import AddToBasket from '~/components/AddToBasket';
import ShoppingBasket from '~/components/ShoppingBasket';

class ProductCard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log(ShoppingBasket);
      return(
        <div className='product-card'>
          <TextBox text={this.props.text}/>
          <AddToBasket clickHandler={ShoppingBasket.incrementProductsCount}/>
          <Image src={this.props.src} width={this.props.width}/>
          <Price amount={this.props.price}/>
        </div>
      );
    }
  }

export default ProductCard;