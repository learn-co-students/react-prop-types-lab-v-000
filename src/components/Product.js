// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <h3>{this.props.name}</h3>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark ? 'Watermarked' : 'Not watermarked'}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
      </div>
    );
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
  weight: function (props, propName) {
    const weight = props[propName];
    if (!weight) {
      return new Error('The `weight` is required.')
    }
    if (isNaN(weight)) {
      return new Error('The `weight` is not a number.')
    }
    if(props[propName] <= 80 || props[propName] >= 300){
      return new Error('`Weight` prop should range between 80 and 300.')
    }
  }
};

export default Product;
