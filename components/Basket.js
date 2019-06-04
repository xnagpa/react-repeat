import React, { Component } from 'react';
import { throws } from 'assert';

class Basket extends Component {
  constructor(props) {
    super(props);
    this.state = { count: this.props.count };
    this.clickHandler = this.clickHandler.bind(this);
  }

  clickHandler() {
    this.setState((prevState) => {
      return { count: prevState.count + 1}
    });
  }

  render() {
    console.log(this.state);
    return(
      <div className='basket'>
        <h4>Товаров в корзине {this.state.count}</h4>
        <button onClick={this.clickHandler}>Increment</button>
      </div>
    );
  }
}

Basket.defaultProps = {
  value: 0
};

export default Basket;