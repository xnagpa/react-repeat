import React, { Component } from 'react';
import Catalog from '~/components/Catalog';

class CatalogPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div className='catalogPage'>
          <Catalog products={this.props.products}/>
      </div>
    );
  }
}

export default CatalogPage;