import React, { Fragment, Component } from 'react';
import Image from '~/components/Image';
import Price from '~/components/Price';
import AddToBasket from '~/components/AddToBasket';
import BasketContext from '~/components/BasketContext';
import { Link } from 'react-router-dom';

class ProductCard extends Component {
    constructor(props) {
      super(props);
    }

    productCount(context, id) {
      let product = context.basket.find((e) => (e.id === id));
      return product ? product.count : 0;
    }

    render() {
      const { text, src, price, width, id } = this.props.product;
      return(
        <div className='product-card'>
          <Link to={`/item/${id}`}>{text}</Link>
          <BasketContext.Consumer>
            {(context) => {
              return (
              <Fragment>
                <label>{this.productCount(context, id)}</label>
              </Fragment>
              )
            }}
          </BasketContext.Consumer>
          <Image src={src} width={width}/>
          <Price amount={price}/>
          <AddToBasket product={this.props.product}/>
        </div>
      );
    }
  }

export default ProductCard;