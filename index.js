import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Calculate from '~/src/calculate';
const calc = new Calculate;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(<div>{calc.plus(1,2)}</div>);
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


