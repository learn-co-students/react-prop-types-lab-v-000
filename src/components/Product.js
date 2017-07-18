import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {

  render() {
    return(
      <div>
        <h1>{this.props.name}</h1>
        <p>Producer: {this.props.producer}</p>
        <p>Water Mark: {this.props.hasWatermark ? 'No' : 'Yes'}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false,
  size: 'regular'
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight(props, propName, component) {
    if(props[propName] < 80 || props[propName] > 300) {
      return new Error(`${propName} is not in range`)
    }
    if(props[propName] == null) {
      return new Error(`${propName} is missing`)
    }
    if(!Number.isInteger(props[propName])) {
      return new Error(`${propName} must be a number`)
    }
  }
}

export default Product;