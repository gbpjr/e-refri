import { React, Component } from 'react'
import CartItem from '../components/CartItem';

import "../scss/styles.scss"

class Cart extends Component {

  constructor (props) {
    super(props)

    this.state = {

    }

    this.removeItem = this.removeItem.bind(this)
  }

  removeItem(item) {
    this.props.removeItem(item)
  }

  render() {
    return (
      <div className="flex-item-4 cart">
        <h2>Subtotal: R$ { this.props.subtotal + ',00'}</h2>
        {
          this.props.cartItems.map((cartItem) => {
            return <CartItem
              key={cartItem.id}
              cartItem={cartItem}
              items={this.props.cartItems}
              removeItem={this.removeItem}
            />
          })
        }
      </div>
    )
  }
}

export default Cart;
