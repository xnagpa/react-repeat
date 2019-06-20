import React, { Fragment, Component } from 'react';
import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';
import AddToBasket from '~/components/AddToBasket';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      const { text, src, price, width, id } = this.props.product;
      return(
        <div className='product-card'>
          <Link to={`/item/${id}`}>{text}</Link>
          <Image src={src} width={width}/>
          <Price amount={price}/>
          <AddToBasket product={this.props.product}/>
        </div>
      );
    }
  }

export default ProductCard;