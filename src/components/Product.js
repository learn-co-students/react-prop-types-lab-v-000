import React from 'react';

//setting the propTypes property (which is an object) on the Order class and import PropTypes at the top of our file.

import PropTypes from 'prop-types';

//Component

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>{this.props.name}</li>
          <li>{this.props.producer}</li>
          <li>{this.props.hasWatermark}</li>
          <li>{this.props.color}</li>
          <li>{this.props.weight}</li>
        </ul>
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

    const validWeight = weight > 80 && weight < 300;

     // You can specify a custom validator. It should return an Error. Use 'return new Error('string')'
  
    if (weight === undefined) {
      return new Error('The `weight` prop is required');
    }

    if (isNaN(weight)) {
      return new Error('The `weight` prop is not a number')
    }

    if (!validWeight) {
      return new Error('The `weight` prop should range between 80 and 300');
    }
  }
}

export default Product;
