import React from 'react';
import PropTypes from 'prop-types';


class Product extends React.Component {
  render() {
    return (
      <div className='product'>
        <h1>{this.props.name}</h1>
        <p>{this.props.producer}</p>
        <p>Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
      </div>
    )
  }
}

Product.defaultProps = {
  hasWatermark: false
}

function properWeight(props, propName, componentName) {
  //componentName = componentName || 'ANONYMOUS';
    if (!props[propName]) {
      return new Error('weight' + ' in ' + componentName + " is required.");
    }
    else {
      let value = props[propName]
      if (typeof value !== 'number') {
        return new Error('weight' + ' in ' + componentName + " must be a number")
      }
      else if (value < 80 || value > 300)
        return new Error('weight' + ' in ' + componentName + " must be between 80 and 300")
      }
}



//new Error('weight' + ' in ' + componentName + " is required.");

Product.propTypes = {
  name: PropTypes.string.isRequired,
  producer: PropTypes.string,
  hasWatermark: PropTypes.bool,
  color: PropTypes.oneOf(['white','eggshell-white','salmon']).isRequired,
  weight: properWeight
}


export default Product
