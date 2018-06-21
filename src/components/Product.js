// Code Product Component Here
import React from 'react';
import PropTypes from 'prop-types';

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
    );
  }
}

Product.defaultProps = {
  hasWatermark: false
}

const PAPER_COLORS = ['white', 'eggshell-white', 'salmon']

function isCorrectWeight (num) {
  debugger;
  return num >= 80 && num <= 300;
}

var weightPropType = function (props, propName) {
  const weight = props[propName];
  if (weight === undefined) {
    return new Error('The weight prop is required.');
  } else if (isNaN(weight)) {
    return new Error('The weight prop is not a number.')
  } else if (!isCorrectWeight(weight)) {
    return new Error('The weight prop should be in the range 80-300.');
  }
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(PAPER_COLORS).isRequired,
  weight: weightPropType
}

export default Product;
