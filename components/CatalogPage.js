import React, { Component } from 'react';
import Catalog from '~/components/Catalog';
import { Products } from '~/constants/Products';

class CatalogPage extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      console.log(Products);
      return(
        <div className='catalogPage'>
          <Catalog products={Products}/>
        </div>
      );
    }
  }

export default CatalogPage;