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
      return this.props.products.map(product => <ProductCard product={product}/>);
    }
  }

export default Catalog;