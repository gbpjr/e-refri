import { React, Component } from 'react'
import "../scss/styles.scss"

class Product extends Component {

  add(refri) {
    this.props.updateCart(refri)
  }

  render() {
    return (
      <li className="flex-item-6 product">
        <div className="flex-row product-wrapper">
          <div className="products-left flex-item-10">
            <h2>{this.props.refri.sabor + ' (' + this.props.refri.marca + ') ' + this.props.refri.quantidade}</h2>
            <span>R$ {this.props.refri.valor + ',00'}</span>
          </div>
          <div className="btn-wrapper flex-item-2">
            <button onClick={(e) => this.add(this.props.refri, e)}>+</button>
          </div>
        </div>
        
      </li>
    )
  }
}

export default Product;
