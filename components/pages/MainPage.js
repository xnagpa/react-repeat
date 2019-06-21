import React, { Component, Fragment } from 'react';
import AppContainer from '~/components/AppContainer';

class MainPage extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <Fragment>
        <AppContainer />
      </Fragment>
    );
  }
}

export default MainPage;

