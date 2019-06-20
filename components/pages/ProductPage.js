import React, { Component, Fragment } from 'react';
import { Products } from '~/constants/Products';
import ProductCard from '~/components/ProductCard';

class ProductPage extends Component {
  constructor(props) {
    super(props);
  }

  findProduct(id) {
    id = parseInt(id, 10);
    return Products.find((product) => product.id === id)
  }

  render() {
    const product = this.findProduct(this.props.product_id);
    return(
      <Fragment>
        <ProductCard product={product}/>
      </Fragment>
    );
  }
}

export default ProductPage;

