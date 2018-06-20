import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>Name: {this.props.name}</h2>
        <h3>Producer: {this.props.producer}</h3>
        <h4>Has Watermark: {this.props.hasWatermark ? "Yes": "No" }</h4>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([,
    'white', 'eggshell-white', 'salmon'
  ]).isRequired,
  weight: function(props, propName) {
    const weight = props[propName];

    if (weight === undefined) {
      return Error('The `weight` prop is required.')
    }

    if (typeof weight !== 'number') {
      return Error('The `weight` prop needs to be a number')
    }

    const isValidWeight = weight > 80 && weight < 300;

    if (!isValidWeight) {
      return Error('You must choose a number between 80 and 300')
    }
  }
}

Product.defaultProps = {
  hasWatermark: false
}

export default Product;
