import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        Name: {this.props.name}<br/>
        Producer: {this.props.producer}<br/>
        Watermark: {this.props.hasWatermark ? "Yes" : "No"}<br/>
        Color: {this.props.color}<br/>
        Weight: {this.props.weight}
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, weight, Product) {
   if (!props.weight || !Number.isInteger(props.weight) || props.weight < 80 || props.weight > 300) {
     return new Error (`Invalid prop ${props.weight} supplied to ${Product}.`);
   }
  }
}

export default Product
