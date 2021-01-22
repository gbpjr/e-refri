import { React, Component } from 'react'
import "../scss/styles.scss"

class CartItem extends Component {

  removeItem(item) {
    if(item.unid > 0)
      item.unid--
    this.props.removeItem(item)
  }

  render() {
    return (
      <div className="flex cart-item">
        <div className="flex flex-item-10">
          <span>{this.props.cartItem.sabor + ' ' + this.props.cartItem.quantidade} | {this.props.cartItem.unid} Un. | R$ {Number(this.props.cartItem.valor*this.props.cartItem.unid) + ',00'}</span>
        </div>
        <div className="btn-wrapper flex-item-2">
          <button onClick={(e) => this.removeItem(this.props.cartItem, e)}><span className="fas fa-trash-alt"></span></button>
        </div>
      </div>
    )
  }
}

export default CartItem;
