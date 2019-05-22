import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import CatalogPage from '~/components/CatalogPage';

import Calculate from '~/src/calculate';
const calc = new Calculate;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <CatalogPage />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


