import React from 'react';
import './App.css';

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£',
  formatPrice: function() {
    return this.price.toFixed(2);
  }
};


class ShopItem extends React.Component {
  render() {
    return (
      <div class="main-content">
        <h2>{this.props.data.brand}</h2>
        <h1>{this.props.data.title}</h1>
        <h3>{this.props.data.description}</h3>
        <div class="description">{this.props.data.descriptionFull}</div>
        <div class="highlight-window mobile">
          <div class="highlight-overlay"></div>
        </div>
        <div class="divider"></div>
        <div class="purchase-info">
          <div class="price">{this.props.data.currency}{this.props.data.formatPrice()}</div>
          <button>Добавить в корзину</button>
        </div>
      </div>
    );
  }
}


function App() {
  return (
    <div className="container">
      <div className="background-element"></div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItem data={item} />
      </div>
    </div>
  )
}

export default App;


