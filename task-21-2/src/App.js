import React, { Component } from "react";

class App extends Component {
  state = {
      product: {
        name: 'Iphone',
        price: 10000,
        model: 'old',
        stock: 5000,
    }
  };

  updateDetails = () => {
    this.setState({
      product: {
       ...this.state.employee,
        price: 150000,
        model: 'New',
      }
    });
  };

  render() {
    const { name,price ,model,stock } = this.state.product;

    return (
      <div>
        <h2 style={{textAlign:"center"}}>Product Details</h2>
        <div style={{textAlign:"center"}}>
          <p>Product price: {price}</p>
          <p>Product model: {model}</p>
          <p>Product Name:{name}</p>

        </div>
        <button style={{marginLeft:"48%"}} onClick={this.updateDetails}>Update Details</button>
      </div>
    );
  }
}

export default App