import React, { Component } from 'react';
import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';
import AddToBasket from '~/components/AddToBasket';
import BasketContext from '~/components/BasketContext';

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
          <BasketContext.Consumer>
              {(data) => {
                const handler = data.increase.bind(data.context)
                return <AddToBasket handler={data.increase} />              
              }}
          </BasketContext.Consumer>
        </div>
      );
    }
  }

export default ProductCard;