import React, { Component, Fragment } from 'react';
import CartContainer from '~/components/CartContainer';

class MainPage extends Component {
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

export default MainPage;

