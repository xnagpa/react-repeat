import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import CartContainer from '~/components/CartContainer';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Fragment>
        <CartContainer />
      </Fragment>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


