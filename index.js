import React, { Component, Fragment } from 'react';
import ReactDOM from 'react-dom';

import AppContainer from '~/components/AppContainer';

import Calculate from '~/src/calculate';
const calc = new Calculate;

class App extends Component {
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

ReactDOM.render(<App />, document.getElementById('root'));


