import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h2>{this.props.name}</h2>
        <p>Producer: {this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
      );
  };
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function(props, propName, componentName) {
    if (props[propName] === undefined) {
      return new Error('Invalid1');
    }

    if(typeof(props[propName]) !== 'number') {
      return new Error('Invalid2');
    }

    if (!(props[propName] > 80 && props[propName] < 300)) {
      return new Error('Invalid3');
    }
  }
};

export default Product;
