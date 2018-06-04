import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="product">
        <ul>
          <li>Name: {this.props.name}</li>
          <li>Producer: {this.props.producer}</li>
          <li>Has Watermark: {this.props.hasWaternmark}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
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
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,
  weight: (props, propName) => {
    const value = props[propName];

    if (value === undefined) {
      return new Error('The `weight` prop is required.');
    }

    if (isNaN(value)) {
      return new Error('The `weight` prop is not a number.');
    }

    const isValidRange = value > 80 && value < 300;

    if (!isValidRange) {
      return new Error('The `weight` prop should range between 80 and 300.');
    }
  }
  // (props, propName) => {
  //   const value = props[propName];
  //   const isValidRange = value > 80 && value < 300;
  //
  //   if (!isNaN(value)) {
  //     return new Error('The `weight` prop is not a number.')
  //   } else if (value === undefined) {
  //     return new Error('The `weight` prop is required.')
  //   } else if (!isValidRange) {
  //     return new Error('The `weight` prop should range between 80 and 300.')
  //   }
  // }
}

// tried method from documentation / stack overflow.
function withinRange(props, propName, componentName) {
  componentName = componentName || 'ANONYMOUS';

  if (typeof props[propName] === 'number') {
    let value = props[propName];
    if (value >= 80 && value <= 300) {
      return value;
    } else {
      return new Error(
        'Invalid prop `' + propName + '` supplied to' + ' `' + componentName + '`. Validation failed. Not between 80 and 300.'
      );
    }
  }
}

export default Product;
