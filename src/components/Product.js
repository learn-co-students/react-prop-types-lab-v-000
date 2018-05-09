import React from 'react';
import PropTypes from 'prop-types';

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <h2>{this.props.name}</h2>
      <h2>{this.props.producer}</h2>
      <h2>{this.props.hasWatermark}</h2>
      <h2>{this.props.color}</h2>
      <h2>{this.props.weight}</h2>
      </div>
    )
  };
};

Product.defaultProps = {
  hasWatermark: false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf([
    'white',
    'eggshell-white',
    'salmon'
  ]).isRequired,

  weight: function(props, propName, componentName) {
    if(typeof props[propName] !== 'number' || props[propName] < 80 || props[propName] > 300) {
      console.error('Invalid');
    };
  }
};
