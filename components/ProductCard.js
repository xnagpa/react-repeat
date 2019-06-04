import React, { Fragment, Component } from 'react';
import Image from '~/components/Image';
import TextBox from '~/components/TextBox';
import Price from '~/components/Price';
import AddToBasket from '~/components/AddToBasket';
import BasketContext from '~/components/BasketContext';

class ProductCard extends Component {
    constructor(props) {
      super(props);
    }
    // Мне пришлось пробросить сюда контекст родительского компонента
    // Это норм или говно? 
    // См 26 строчку.
    render() {
      return(
        <div className='product-card'>
          <TextBox text={this.props.text}/>
          <Image src={this.props.src} width={this.props.width}/>
          <Price amount={this.props.price}/>
          <BasketContext.Consumer>            
              {(data) => {
                const handler = data.increase.bind(data.context)
                return (
                  <Fragment>
                    <AddToBasket handler={data.increase} />
                    <label>Count</label>
                    <input className='js-items-count' defaultValue='1'/>
                  </Fragment>
                )         
              }}
          </BasketContext.Consumer>
        </div>
      );
    }
  }

export default ProductCard;