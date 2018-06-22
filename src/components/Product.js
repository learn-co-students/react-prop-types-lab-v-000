// Code Product Component Here
import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
class Product extends React.Component {
  render () {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Producer: {this.props.producer}</p>
        <p>Has Watermark: {this.props.hasWatermark}</p>
        <p>Color: {this.props.color}</p>
        <p>Weight: {this.props.weight}</p>
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
  color: PropTypes.oneOf(['white', 'eggshell-white', 'salmon']).isRequired,
  weight: function (props, propName, componentName) {
    componentName = componentName || 'ANONYMOUS';

    if (props[propName]) {
      let weight = props[propName];
      if (weight === undefined){
          return new Error ('The `weight` prop is required.')
      }
      if (isNaN(weight)) {
        return new Error ("Weight must be number")
      }
      if (weight > 300 || weight < 80 ) {
          return new Error ("Weight must be within range")
      }
    }
}
}



export default Product
