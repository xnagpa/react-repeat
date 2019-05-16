import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import Image from '~/components/Image';

import Calculate from '~/src/calculate';
const calc = new Calculate;

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
        <Image src='https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260'/>
        <div>{calc.plus(1,2)}</div>
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));


