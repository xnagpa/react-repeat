import React, { Component } from 'react';
import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';

class ProductCard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div className='product-card'>
          <TextBox text={this.props.text}/>
          <Image src={this.props.src} width={this.props.width}/>
          <Price amount={this.props.price}/>
        </div>
      );
    }
  }

export default ProductCard;