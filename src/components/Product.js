import React from 'react';
import PropTypes from 'prop-types';

class Product extends React.Component {
  render(){
    return(
      <div className="product">
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
  hasWatermark: false,
};

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: React.PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: (props, propName) => {
    const weight = props[propName]
    const range = weight > 80 && weight < 300

    if (weight === undefined) {
      return new Error('Weight is required')
    }

    if (isNaN(weight)){
      return new Error('Weight must be a number')
    }

    if (!range) {
      return new Error('Out of range')
    }
  }
}

export default Product;
