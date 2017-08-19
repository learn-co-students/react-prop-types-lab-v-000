import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <h1>{ this.props.name }</h1>
        <p><strong>Producer:</strong>{ this.props.producer }</p>
        <p><strong>Has watermark:</strong>{ this.props.hasWatermark }</p>
        <p><strong>Color:</strong>{ this.props.color }</p>
        <p><strong>Weight:</strong>{ this.props.weight }</p>
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
  weight: (props, propName) => {
    const weight = props[propName]

    if (!weight) {
      return new Error('`weight` is required.')
    }

    if (isNaN(weight)) {
      return new Error('`weight` must be a number.')
    }

    if (weight < 80 || weight > 300) {
      return new Error('`weight` must be between 80 and 300.')
    }
  }
}

export default Product;
