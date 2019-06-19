import React, { Component } from 'react';
import ProductCard from '~/components/ProductCard';

class Catalog extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return(
        <div className='catalog'>
          {this.populateCatalog()}
        </div>
      );
    }

    populateCatalog() {
      let products = []
      this.props.products.forEach((product) => {
        products.push(<ProductCard
          text={product.text}
          src={product.src}
          price={product.price}
          width={product.width}
          product={product}/>);
      })
      return products;
    }
  }

export default Catalog;