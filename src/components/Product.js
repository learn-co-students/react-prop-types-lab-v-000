// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <h2>Name: {this.props.name}</h2>
        <ul>
          <li>Producer: {this.props.producer}</li>
          <li>hasWatermark: {this.props.hasWatermark ? 'true' : 'false'}</li>
          <li>Color: {this.props.color}</li>
          <li>Weight: {this.props.weight}</li>
        </ul>
      </div>
    );
  }
}

Product.defaultProps = {
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName) {
    if (props[propName] === undefined) {
      return new Error('Invalid prop, weight must be defined');
    } else if (isNaN(props[propName])) {
      return new Error('Invalid prop, weight must be a number');
    } else if (!(props[propName] > 80 && props[propName] < 300)) {
      return new Error('Invalid prop, weight must be between 80 and 300');
    };
  },
};

export default Product;
