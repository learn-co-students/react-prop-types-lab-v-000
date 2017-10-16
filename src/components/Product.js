// Code Product Component Here
// Code The Spaceship Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div className="spaceship">
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
  }
}

Product.defaultProps = {
  producer: 'slow',
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (props[propName].constructor != Number) {
      return new Error(
        'Invalid weight. Must be a number'
      );
    }
    else if (props[propName] > 300 || props[propName] < 80) {
      return new Error(
        'Invalid weight. Must be between 80 and 300.'
      );
    }
  }
}

export default Product;
