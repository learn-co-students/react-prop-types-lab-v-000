import React from 'react'
import PropTypes from 'prop-types'

export default class Product extends React.Component {
  render() {
    return (
      <div className="product">
      <h1>{this.props.name}</h1>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark:false
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['salmon', 'eggshell-white', 'white']).isRequired,
  weight: function(props, propName) {
    if (!props[propName]) {
      return new Error("Weight is required.");
    }
    if (isNaN(props[propName])) {
      return new Error("Weight must be a number");
    }
    if (props[propName] <= 80 || props[propName] >= 300 ){
      return new Error("Weight must be greater than 80, and less than 300");
    }
  }
};
