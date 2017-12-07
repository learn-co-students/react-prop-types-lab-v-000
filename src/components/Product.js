// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render() {
    return (
      <div>
        <p>{this.props.name}</p>
        <p>{this.props.producer}</p>
        <p>{this.props.hasWatermark}</p>
        <p>{this.props.color}</p>
        <p>{this.props.weight}</p>
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
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: function(props, propName) {
    if (props[propName]<80 || props[propName]>300) {
      return new Error('weight must be between 80 and 300.');
    } else if (props[propName] === undefined) {
      return new Error('a weight is required.');
    } else if (isNaN(props[propName])) {
      return new Error('weight must be a number.');
    }
  }
}

export default Product;