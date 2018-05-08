
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
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
}

function weightValidator(props, propName, componentName) {
  if (!props[propName]) {
    return new Error(propName + ' is required!');
  }
  if (isNaN(props[propName])) {
    return new Error(propName + ' must be a number!');
  }
  if (props[propName] < 80 || props[propName] > 300) {
    return new Error(propName + ' of a ' + componentName + ' must be between 80 and 300');
  }
}

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: weightValidator
}


export default Product;
