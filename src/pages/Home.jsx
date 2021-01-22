import { React, Component } from 'react'
import Cart from '../components/Cart';
import Product from '../components/Product';

class Home extends Component {
  
  constructor(props) {
    super(props)

    this.state = {
      refrigerantes: [],
      cartItems: [],
      subtotal: 0
    }
    this.updateCart = this.updateCart.bind(this)
    this.removeItem = this.removeItem.bind(this)
  }

  componentDidMount () {
    try {
      fetch('https://api.adsim.co/crm/api/v1/refrigerante/listar', {mode: 'cors'})
      .then(response => response.json())
      .then(response => {

        this.setState(
          {
            refrigerantes: response,
          }
        )
      })
    } catch(err) {
      console.log(err)
    }
  }

  updateCart(item) {
    let tempCart = this.state.cartItems

    if(!item.unid){
      item.unid = 1
      tempCart.push(item)
    }else{
      item.unid++
    }

    this.setState({cartItems: tempCart})

    let total = this.state.cartItems.reduce((prev, next) => +prev + +next.valor*next.unid, 0)

    this.setState({subtotal: total})
  }

  removeItem(item) {
    let tempCart = this.state.cartItems

    if(item.unid === 0){
      tempCart = this.state.cartItems.filter(element => {
        return element.id !== item.id
      })
    }

    this.setState({
      cartItems: tempCart,
    })

    let total = this.state.cartItems.reduce((prev, next) => +prev + +next.valor*next.unid, 0)

    this.setState({subtotal: total})
  }

  render() {
    return (
      <div>
        <header className="header">
          <div>E-Refri</div>
        </header>
        <div className="flex">
          <section className="flex-item-8 products">
            <h1>Nossos produtos</h1>
            <ul className="flex">
              {
                this.state.refrigerantes.map((refri) => {
                  return <Product
                    key={refri.id}
                    refri={refri}
                    updateCart={this.updateCart}
                  />
                })
              }
            </ul>
          </section>
          <Cart
            cartItems={this.state.cartItems}
            removeItem={this.removeItem}   
            subtotal={this.state.subtotal}     
          />
      </div>
      <footer className="footer">
        &copy; 2021 Geovane Júnior. Me contrata aí, meu!
      </footer>
    </div>
    )
  }
}

export default Home;