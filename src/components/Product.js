// Code Product Component Here

import React from 'react'
import PropTypes from 'prop-types'

class Product extends React.Component {

    render() {
        return(
            <div>
                <div>Name: {this.props.name}</div>
                <div>Producer: {this.props.producer}</div>                
                <div>Has Watermark: {this.props.hasWatermark}</div>                
                <div>Color: {this.props.color}</div>                
                <div>Weight: {this.props.weight}</div>                
            </div>
        );
    }
}

Product.defaultProps = {
    hasWatermark: false,
}

Product.propTypes = {
    name: PropTypes.string.isRequired,
    producer: PropTypes.string,
    hasWatermark: PropTypes.bool,
    color: PropTypes.oneOf([
      'white', 
      'eggshell-white', 
      'salmon'
    ]).isRequired,
    weight: (props, propName) => {
        const weight = props[propName];
        if (weight === undefined) {
            return new Error('The `weight` prop is required.');
          }
      
          if (isNaN(weight)) {
            return new Error('The `weight` prop is not a number.');
          }
      
          const isValidWeight = weight > 80 && weight < 300;
      
          if (!isValidWeight) {
            return new Error('The `weight` prop should range between 80 and 300.');
          }
    },
}


export default Product
