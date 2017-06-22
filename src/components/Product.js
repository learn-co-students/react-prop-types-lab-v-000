import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{ this.props.name }</h2>
        <h3>{ this.props.producer }</h3>
        <h3>{ this.props.hasWatermark }</h3>
        <h3>{ this.props.color }</h3>
        <h3>{ this.props.weight }</h3>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName];
    const weightRange = weight > 80 && weight < 300;

    if (weight === undefined) {
      return new Error('The `weight` is required');
    }
    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number');
    }
    if (!weightRange) {
      return new Error('The `weight` must range between 80-300');
    }
  }
};

export default Product;
